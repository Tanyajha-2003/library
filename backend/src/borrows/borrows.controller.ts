import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { BorrowsService } from './borrows.service';

@Controller('borrows')
export class BorrowsController {
  constructor(private svc: BorrowsService){}
  @Post('borrow')
  borrow(@Body() body:any){
    return this.svc.borrow(Number(body.bookId), Number(body.userId));
  }
  @Post('return')
  return(@Body() body:any){
    return this.svc.return(Number(body.bookId), Number(body.userId));
  }
  @Get('user/:id')
  listByUser(@Param('id') id:number){
    return this.svc.listByUser(Number(id));
  }
}