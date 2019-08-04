import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async login(data : UserDTO) {
        const { username, password } = data;
        const user = await this.userRepository.findOne({where : {username}});
        if (!user || (await user.comparePassword(password))) {
            throw new HttpException(
                'Invalid username or password',
                HttpStatus.BAD_REQUEST
            );
        }

        return user.toResponseObject();
    }

    async register(data : UserDTO) {
        const { username } = data;
        let user = await this.userRepository.findOne({where : {username}});
        if (user) {
            throw new HttpException(
                'User already exist',
                HttpStatus.BAD_REQUEST
            );
        }

        user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user.toResponseObject();

    }
}
