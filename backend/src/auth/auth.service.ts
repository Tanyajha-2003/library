import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  prisma = new PrismaClient();
  constructor(private jwtService: JwtService){}

  async validateUser(email: string, pass: string){
    const user = await this.prisma.user.findUnique({ where: { email }});
    if(!user) return null;
    const match = await bcrypt.compare(pass, user.password);
    if(match) {
      const { password, ...rest } = user as any;
      return rest;
    }
    return null;
  }

  async login(user: any){
    const payload = { sub: user.id, email: user.email, name: user.name };
    return { access_token: this.jwtService.sign(payload) };
  }
}