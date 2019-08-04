import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ShowsModule } from './shows/shows.module';
import { ShowsController } from './shows/shows.controller';
import { ShowsService } from './shows/shows.service';

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
    ShowsModule,
  ],
})

export class AppModule {}
