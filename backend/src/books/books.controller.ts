import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private svc: BooksService){}
  @Post()
  create(@Body() body:any){ return this.svc.create(body); }
  @Get()
  list(@Query() q:any){ return this.svc.list(q); }
  @Get(':id')
  find(@Param('id') id:number){ return this.svc.find(Number(id)); }
  @Put(':id')
  update(@Param('id') id:number, @Body() body:any){ return this.svc.update(Number(id), body); }
  @Delete(':id')
  delete(@Param('id') id:number){ return this.svc.delete(Number(id)); }
}