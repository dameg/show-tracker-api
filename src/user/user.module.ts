import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports : [TypeOrmModule.forFeature([UserEntity]), AuthModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {

}
