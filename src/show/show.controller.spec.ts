import { Test } from '@nestjs/testing';
import { ShowController } from './show.controller';
import { ShowService } from './show.service';

describe('ShowController', () => {
  let showController: ShowController;
  let showService: ShowService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ShowController],
      providers: [ShowService],
    }).compile();

    showService = module.get<ShowService>(ShowService);
    showController = module.get<ShowController>(ShowController);
  });

  describe('showIndex', () => {
    it('should return an array of shows', async () => {
      const result = [{ id: 1, name: 'Orange is the new black', episode: [] }];
      jest
        .spyOn(showService, 'showIndex')
        .mockImplementation(() => Promise.resolve(result));
      expect(await showController.showIndex()).toBe(result);
    });
  });
});
