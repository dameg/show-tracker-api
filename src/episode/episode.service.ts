import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Episode } from './episode.entity';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectRepository(Episode)
    private readonly episodeRepository: Repository<Episode>
  ) {}

    async episodeIndex(id : number) : Promise<Episode[]> {
      return await this.episodeRepository.find({where: {showId : id}});
  }

  // async createEpisode(id : number, episode : Episode ) : Promise<Episode> {
  // const show = await this.showRepository.findOne({ where: {id : id} });
  // const newEpisode = await this.episodeRepository.create({...episode, show : show});
  //       await this.episodeRepository.save(newEpisode);
  //       return newEpisode;
  // }

}
