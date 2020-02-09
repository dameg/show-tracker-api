import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { ShowController } from './show.controller';
import { ShowService } from './show.service';
import { Show } from './show.entity';
import { EpisodeService } from '../episode/episode.service'
import { Episode } from '../episode/episode.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

describe('ShowController', () => {
  let showController: ShowController;
  let showService: ShowService;
  let showRepository: Repository<Show>;
  let episodeService: EpisodeService;
  let episodeRepository: Repository<Episode>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ShowController],
      providers: [ShowService,
        EpisodeService,
        {
          provide: getRepositoryToken(Show),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Episode),
          useClass: Repository,
        },
      ],
      imports: [ConfigModule.forRoot()],
    }).compile();

    showController = moduleRef.get<ShowController>(ShowController);
    showService = moduleRef.get<ShowService>(ShowService);
    showRepository = moduleRef.get<Repository<Show>>(getRepositoryToken(Show));
    episodeService = moduleRef.get<EpisodeService>(EpisodeService);
    episodeRepository = moduleRef.get<Repository<Episode>>(getRepositoryToken(Episode));

  });

  describe('showIndex', () => {
    it('should return an array of Shows', async () => {
      const result: Show[] = [{
        id: 1,
        name: 'Stranger Things',
        episode: []
      },
      {
        id: 2,
        name: 'Dexter',
        episode: []
      }]

      jest.spyOn(showRepository, 'find').mockResolvedValueOnce(result);
      expect(await showService.showIndex()).toEqual(result);
    });
  });

  describe('selectShow', () => {
    it('should return an array of Shows', async () => {
      const result: Show = {
        id: 1,
        name: 'Stranger Things',
        episode: []
      }
      jest.spyOn(showRepository, 'findOne').mockResolvedValueOnce(result)
      expect(await showService.selectShow(1)).toEqual(result);
    });
  });

});
