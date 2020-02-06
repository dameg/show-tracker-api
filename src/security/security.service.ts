import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { AuthService } from '../auth/auth.service';
import { UserDTO } from '../user/user.dto';

@Injectable()
export class SecurityService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly authService: AuthService,
  ) {}

  async register(payload: UserDTO): Promise<UserEntity> {
    const { username } = payload;
    let user = await this.userRepository.findOne({ where: { username } });
    if (user) {
      throw new HttpException(
        'Error: User already exist!',
        HttpStatus.CONFLICT,
      );
    }
    user = await this.userRepository.create(payload);
    await this.userRepository.save(user);
      return user;
  }

  async login(payload: UserDTO): Promise<string> {
    const token = await this.authService.generateToken(payload);
      return token;
  }
}
