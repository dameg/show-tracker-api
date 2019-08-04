import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Show } from './show.entity';
import { Episode } from './episode.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Show, Episode])],
    providers: [ShowService],
    controllers: [ShowController],
})
export class ShowsModule {}
