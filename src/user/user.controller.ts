import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Post('login')
    userLogin(@Body() data : UserDTO) {
        return this.userService.login(data);
    }

    @Post('/register')
    userRegister(@Body() data : UserDTO) {
        return this.userService.register(data);
    }
}
