import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpisodeService } from './episode.service';
import { Episode } from './episode.entity';
import { Show } from '../show/show.entity'


@Module({
  imports: [TypeOrmModule.forFeature([Episode, Show])],
  providers: [EpisodeService],
  exports: [EpisodeService],
})
export class EpisodeModule {}
