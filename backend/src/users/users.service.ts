import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}
  async create(data: {name:string,email:string,password:string}) {
    const hash = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({ data: { ...data, password: hash }});
  }
  async findAll() {
    return this.prisma.user.findMany({ select: { id:true, name:true, email:true, createdAt:true }});
  }
  async findById(id:number) {
    return this.prisma.user.findUnique({ where: { id }});
  }
  async findByEmail(email:string){
    return this.prisma.user.findUnique({ where: { email }});
  }
}