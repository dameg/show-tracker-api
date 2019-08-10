import { Controller, Get, Param, Post, Body, Patch, Delete, UseGuards } from '@nestjs/common';
import { ShowService } from './show.service';
import { Show } from './show.entity';
import { Episode } from './episode.entity';

@Controller('show')
export class ShowController {
    constructor(private readonly showService: ShowService) {}


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
        return this.showService.episodeIndex(id);
    }

    @Post(':id/episode')
    async createEpisode(@Param('id') id : number, @Body() episode : Episode) {
        return this.showService.createEpisode(id, episode);
    }

    // @Patch(':id/episode/:subId')
    // async updateEpisdoe(@Param('id') id : number , @Param('subId') subId : number, @Body() episode: Episode) {
        // return this.showService.updateEpisode(id, subId, episode);
    // }
}
