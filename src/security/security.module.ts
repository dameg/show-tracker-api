import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { SecurityService } from './security.service';
import { SecurityController } from './security.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), AuthModule],
  providers: [SecurityService],
  controllers: [SecurityController],
})
export class SecurityModule {}
