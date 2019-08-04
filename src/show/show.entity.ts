import { Column, Entity, PrimaryGeneratedColumn, OneToMany}  from 'typeorm';
import { Episode } from './episode.entity';
import { IsNotEmpty } from "class-validator";
@Entity()
export class Show {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  @IsNotEmpty()
  name: string;

  @OneToMany(type => Episode, episode => episode.show)
  episode: Episode[];
}

