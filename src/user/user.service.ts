import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async createUser(payload : UserDTO) : Promise<UserEntity>  {
        const { name } = payload;
        let user = await this.userRepository.findOne({where : {name}});
        if (user) {
            throw new HttpException(
                'Error: User already exist!',
                HttpStatus.CONFLICT
            );
        }
        user = await this.userRepository.create(payload);
        await this.userRepository.save(user);
            return user;
    }

}
