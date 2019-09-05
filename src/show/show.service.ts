import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Show } from './show.entity';

@Injectable()
export class ShowService {
  constructor(
    @InjectRepository(Show)
    private readonly showRepository: Repository<Show>,
  ) {}

  async showIndex(): Promise<Show[]> {
    return await this.showRepository.find();
  }

  async selectShow(id: number): Promise<Show> {
    return await this.showRepository.findOne(id);
  }

  async createShow(show: Show): Promise<Show> {
    return await this.showRepository.save(show);
  }

  async updateShow(id: number, show: Show): Promise<UpdateResult> {
    return await this.showRepository.update(id, show);
  }

  async deleteShow(id: number): Promise<DeleteResult> {
    return await this.showRepository.delete(id);
  }
}
