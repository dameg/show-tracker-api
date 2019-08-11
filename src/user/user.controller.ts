import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('register')
    async createUser (@Body() payload : UserDTO)​​ {
        return this.userService.createUser(payload);
    }
$
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async loginUser (@Request() req) {
            return req.user;
    }

}
