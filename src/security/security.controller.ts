import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SecurityService } from './security.service';
import { UserDTO } from '../user/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Post('register')
  async registerUser(@Body() payload: UserDTO) {
    return await this.securityService.register(payload);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() payload: UserDTO) {
    return await this.securityService.login(payload);
  }
}
