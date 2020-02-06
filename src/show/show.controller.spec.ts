import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { ShowController } from './show.controller';
import { ShowService } from './show.service';
import { Show } from './show.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('ShowController', () => {
  let showController: ShowController;
  let showService: ShowService;
  let showRepository: Repository<Show>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ShowController],
      providers: [ShowService,
        {
          provide: getRepositoryToken(Show),
          useClass: Repository,
        },
      ],
      imports: [ConfigModule.forRoot()],
    }).compile();

    showController = moduleRef.get<ShowController>(ShowController);
    showService = moduleRef.get<ShowService>(ShowService);
    showRepository = moduleRef.get<Repository<Show>>(getRepositoryToken(Show));

  });

  describe('showIndex', () => {
    it('should return an array of Shows', async () => {
      const result: Show = {
        id: 1, name: 'Orange is the new black', episode: []
      }
      jest.spyOn(showRepository, 'find').mockResolvedValueOnce([result]);
      expect(await showService.showIndex()).toEqual([result]);
    });
  });
});
