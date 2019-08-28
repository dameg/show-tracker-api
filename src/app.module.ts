import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ShowModule } from './show/show.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SecurityController } from './security/security.controller';
import { SecurityModule } from './security/security.module';

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
    ShowModule,
    SecurityModule,
  ],
  controllers: [SecurityController],
})

export class AppModule {}
