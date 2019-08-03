import { Injectable } from '@nestjs/common';
import { Show } from './interfaces/show.interface';

@Injectable()
export class ShowsService {
    private readonly shows: Show[] = [];

    findAll(): Show[] {
        return this.shows;
      }

}
