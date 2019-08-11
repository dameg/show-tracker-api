import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate (name: string, password: string) : Promise<any> {
    console.log('Validate...');
    const user = await this.authService.validateUser(name, password);
    if (!user) {
        throw new HttpException(
            'Error: Invalid name or password!',
            HttpStatus.UNAUTHORIZED
        );
    }
    return user;
  }

}