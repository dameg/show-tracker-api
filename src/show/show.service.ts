import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Show } from './show.entity';
import { Episode } from './episode.entity';

@Injectable()
export class ShowService {
    constructor(
        @InjectRepository(Show)
        private readonly showRepository: Repository<Show>,
        @InjectRepository(Episode)
        private readonly episodeRepository: Repository<Episode>,
      ) {}

      async showIndex() : Promise <Show[]> {
          return await this.showRepository.find();
      }

      async selectShow(id : number) : Promise<Show> {
        return await this.showRepository.findOne(id);
      }

      async createShow(show : Show) : Promise<Show> {
          return await this.showRepository.save(show);
      }

      async updateShow(id : number, show : Show) : Promise<UpdateResult> {
          return await this.showRepository.update(id, show);
      }

      async deleteShow(id : number) : Promise<DeleteResult> {
          return await this.showRepository.delete(id);
      }

      async episodeIndex(id : number) : Promise<Episode[]> {
          return await this.episodeRepository.find({where: {showId : id}});
      }

      async createEpisode(id : number, episode : Episode ) : Promise<Episode> {
       const show = await this.showRepository.findOne({ where: {id : id} });
       const newEpisode = await this.episodeRepository.create({...episode, show : show});
             await this.episodeRepository.save(newEpisode);
            return newEpisode;
      }

      async updateEpisode(id : number, subId : number, episode : Episode) : Promise<UpdateResult> {
        const updatedEpisode = await
      }
}
