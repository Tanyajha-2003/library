import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BorrowsService {
  constructor(private prisma: PrismaService){}
  async borrow(bookId:number, userId:number){
    const book = await this.prisma.book.findUnique({ where:{ id: bookId }});
    if(!book) throw new Error('Book not found');
    if(book.isBorrowed) throw new Error('Already borrowed');
    await this.prisma.book.update({ where:{ id: bookId }, data:{ isBorrowed:true }});
    return this.prisma.borrow.create({ data: { bookId, userId }});
  }
  async return(bookId:number, userId:number){
    const borrow = await this.prisma.borrow.findFirst({ where:{ bookId, userId, returnedAt: null }});
    if(!borrow) throw new Error('Borrow record not found');
    await this.prisma.borrow.update({ where:{ id: borrow.id }, data:{ returnedAt: new Date() }});
    await this.prisma.book.update({ where:{ id: bookId }, data:{ isBorrowed:false }});
    return { ok: true };
  }
  listByUser(userId:number){
    return this.prisma.borrow.findMany({ where:{ userId }, include:{ book:true }});
  }
}