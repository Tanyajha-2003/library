import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService){}
  @Post('login')
  async login(@Body() body:any){
    const user = await this.auth.validateUser(body.email, body.password);
    if(!user) return { error: 'Invalid credentials' };
    return this.auth.login(user);
  }
}