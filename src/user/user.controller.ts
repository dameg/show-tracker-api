import { Controller, Post, Body, UseGuards, forwardRef, Inject } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
        ) {}

    @Post('register')
    async createUser (@Body() payload : UserDTO) {
        return this.userService.createUser(payload);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() payload : UserDTO) {
        return this.authService.generateToken(payload);
    }

}
