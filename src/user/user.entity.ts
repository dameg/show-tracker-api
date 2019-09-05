import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'char',
    width: 100,
    unique: true,
  })
  username: string;

  @Column('text')
  password: string;

  @BeforeInsert()
  hashPassword = async () =>
    (this.password = await bcrypt.hash(this.password, 10));
}
