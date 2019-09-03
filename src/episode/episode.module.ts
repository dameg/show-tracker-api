import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episode } from './episode.entity';
import { EpisodeService } from './episode.service'
@Module({
  imports: [TypeOrmModule.forFeature([Episode])],
  providers: [EpisodeService],
  exports: [EpisodeService]
})
export class EpisodeModule {}
