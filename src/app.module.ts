import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ShowModule } from './show/show.module';
import { SecurityModule } from './security/security.module';
import { EpisodeService } from './episode/episode.service';
import { EpisodeModule } from './episode/episode.module';

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
    SecurityModule,
    ShowModule
  ],
})

export class AppModule {}
