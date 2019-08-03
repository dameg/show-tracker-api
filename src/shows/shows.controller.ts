import { Controller, Get, All } from '@nestjs/common';
import { ShowsService } from './shows.service';

@Controller('shows')
export class ShowsController {
    @Get()
    async findAll(): Promise<Show[]> {
        return this.showsService​​.findAll();
    }

}
