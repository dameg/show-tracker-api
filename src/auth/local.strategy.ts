import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from '../user/user.dto.ts';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const payload = {
      username,
      password,
    };
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new HttpException(
        'Error: Invalid name or password!',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }
}
