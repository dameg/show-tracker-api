import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { UserDTO } from '../user/user.dto.ts';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(payload: UserDTO): Promise<UserEntity | null> {
    const { username, password } = payload;
    const user = await this.userService.getUserByUsername(username);
    if (!user || !this.comparePassword(password, user.password)) return null;
    return user;
  }

  async generateToken(payload: UserDTO): Promise<string> {
    const token = await this.jwtService.sign(payload);
    return token;
  }

  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
