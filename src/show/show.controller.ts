import { Controller, Get, Param, Post, Body, Patch, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ShowService } from './show.service';
import { EpisodeService } from '../episode/episode.service';
import { Show } from './show.entity';

@Controller('show')
export class ShowController {
    constructor(
        private readonly showService: ShowService,
        private readonly episodeService: EpisodeService
        ) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async showIndex() : Promise<Show[]> {
        return this.showService.showIndex();
    }

    @Get(':id')
    async selectShow(@Param('id') id : number) : Promise<Show> {
        return this.showService.selectShow(id);
    }

    @Post()
    async creatShow(@Body() show : Show) {
        return this.showService.createShow(show);
    }

    @Patch(':id')
    async updateShow(@Param('id') id : number, @Body() show: Show) {
        return this.showService.updateShow(id, show);
    }

    @Delete(':id')
    async deleteShow(@Param('id') id : number) {
        return this.showService.deleteShow(id);
    }

    @Get(':id/episode')
    async episodeIndex(@Param('id') id : number) {
        return this.episodeService.episodeIndex(id);
    }
}
