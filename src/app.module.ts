import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ShowModule } from './show/show.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'show-tracker',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
    UserModule,
    ShowModule,
  ],
})

export class AppModule {}
