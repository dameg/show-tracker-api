import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { Shows } from './shows.entity';
import { Episode } from './episode.entity';

@Controller('shows')
export class ShowsController {
    constructor(private readonly showsService: ShowsService) {}

    @Get()
    async itemIndex() : Promise<Shows[]> {
        return this.showsService.showIndex();
    }

    @Get(':id')
    async selectItem(@Param('id') id : number) : Promise<Shows> {
        return this.showsService.selectShow(id);
    }

    @Post()
    async creatItem(@Body() show : Shows) {
        return this.showsService.createShow(show);
    }

    @Patch(':id')
    async updateItem(@Param('id') id : number, @Body() show: Shows) {
        return this.showsService.updateShow(id, show);
    }

    @Delete(':id')
    async deleteItem(@Param('id') id : number) {
        return this.showsService.deleteShow(id);
    }

    // Episodes CRUD
    @Get(':id/episode')
    async episodeIndex(@Param('id') id : number) {
        return this.showsService.episodeIndex(id);
    }

    @Post(':id/episode')
    async creatSubItem(@Param('id') id : number, @Body() episode : Episode) {
        return this.showsService.createEpisode(id, episode);
    }

}
