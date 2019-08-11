import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { UserDTO } from '../user/user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async validateUser (name : string, password : string) : Promise<UserEntity | null>  {
        console.log('validate');
        const user = await this.userRepository.findOne({where: {name}});
        if (!user || !this.comparePassword(password, user.password)) return null;
            return user;
    }

    async comparePassword (password : string, hashedPassword : string)  : Promise<boolean> {
       return await bcrypt.compare(password, hashedPassword);
    }

}
