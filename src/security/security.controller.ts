import { Controller, Post } from '@nestjs/common';

@Controller('')
export class SecurityController {

  constructor() {}

  @Post('register')
  async registerUser () {
    return await '0';
  }


  @Post('login')
  async loginUser () {
    return await '0';
  }

  @Post('logout')
  async logoutUser () {
    return await '0';
  }

}