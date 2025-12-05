import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private svc: AuthorsService){}
  @Post()
  create(@Body() body:any){ return this.svc.create(body); }
  @Get()
  list(){ return this.svc.list(); }
  @Get(':id')
  find(@Param('id') id:number){ return this.svc.find(Number(id)); }
  @Put(':id')
  update(@Param('id') id:number, @Body() body:any){ return this.svc.update(Number(id), body); }
  @Delete(':id')
  delete(@Param('id') id:number){ return this.svc.delete(Number(id)); }
}