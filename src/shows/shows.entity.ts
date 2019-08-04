import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinTable}  from 'typeorm';

import { Episode } from './episode.entity';
import { IsNotEmpty } from "class-validator";
@Entity()
export class Shows {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  @IsNotEmpty()
  name: string;

  @OneToMany(type => Episode, episode => episode.shows)
  episode: Episode[];
}

