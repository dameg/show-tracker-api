import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Shows } from './shows.entity';
import { Episode } from './episode.entity';

@Injectable()
export class ShowsService {
    constructor(
        @InjectRepository(Shows)
        private readonly showsRepository: Repository<Shows>,
        @InjectRepository(Episode)
        private readonly episodeRepository: Repository<Episode>,
      ) {}

      async showIndex() : Promise <Shows[]> {
          return await this.showsRepository.find();
      }

      async selectShow(id : number) : Promise<Shows> {
        return await this.showsRepository.findOne(id);
      }

      async createShow(show : Shows) : Promise<Shows> {
          return await this.showsRepository.save(show);
      }

      async updateShow(id : number, show : Shows) : Promise<UpdateResult> {
          return await this.showsRepository.update(id, show);
      }

      async deleteShow(id : number) : Promise<DeleteResult> {
          return await this.showsRepository.delete(id);
      }

      async episodeIndex(id : number) {
          return await this.episodeRepository.find({where: {showsId : id}});
      }

      async createEpisode(id : number, episode : Episode ) {
       const show = await this.showsRepository.findOne({ where: {id : id} });
       const newEpisode = await this.episodeRepository.create({...episode, shows : show});
       await this.episodeRepository.save(newEpisode);
       return show;
      }



}
