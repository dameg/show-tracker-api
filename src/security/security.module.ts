import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { SecurityService } from './security.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [SecurityService],
})

export class SecurityModule {}
