import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Show } from '../show/show.entity'
import { IsNotEmpty } from 'class-validator';

@Entity('episode')
export class Episode {
 @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  @IsNotEmpty()
  name : string

  @ManyToOne(type => Show, show => show.episode)
  show: Show;

}



