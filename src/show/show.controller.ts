import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ShowService } from './show.service';
import { EpisodeService } from '../episode/episode.service';
import { Show } from './show.entity';
import { Episode } from '../episode/episode.entity'

@Controller('show')
export class ShowController {
  constructor(
    private readonly showService: ShowService,
    private readonly episodeService: EpisodeService,
  ) { }

  @Get()
  async showIndex(): Promise<Show[]> {
    return await this.showService.showIndex();
  }

  @Get(':id')
  async selectShow(@Param('id') id: number): Promise<Show> {
    return await this.showService.selectShow(id);
  }

  @Post()
  async creatShow(@Body() show: Show) {
    return await this.showService.createShow(show);
  }

  @Patch(':id')
  async updateShow(@Param('id') id: number, @Body() show: Show) {
    return await this.showService.updateShow(id, show);
  }

  @Delete(':id')
  async deleteShow(@Param('id') id: number) {
    return await this.showService.deleteShow(id);
  }

  @Get(':id/episode')
  async episodeIndex(@Param('id') id: number) {
    return await this.episodeService.episodeIndex(id);
  }

  @Post(':id/episode')
  async createEpisode(@Param('id') id: number, @Body() episode: Episode) {
    return await this.episodeService.createEpisode(id, episode);
  }
}
