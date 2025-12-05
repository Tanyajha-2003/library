import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private users: UsersService){}
  @Post()
  create(@Body() body: any){
    return this.users.create(body);
  }
  @Get()
  list(){
    return this.users.findAll();
  }
}