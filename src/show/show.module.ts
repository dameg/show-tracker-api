import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Show } from './show.entity';
import { EpisodeModule } from '../episode/episode.module';

@Module({
  imports: [TypeOrmModule.forFeature([Show]), EpisodeModule],
  providers: [ShowService],
  controllers: [ShowController],
})
export class ShowModule {}
