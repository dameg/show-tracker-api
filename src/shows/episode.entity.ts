import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Shows } from './shows.entity'
import { IsNotEmpty } from 'class-validator';

@Entity('episode')
export class Episode {
 @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  @IsNotEmpty()
  name : string

  @ManyToOne(type => Shows, shows => shows.episode)
  shows: Shows;

}



