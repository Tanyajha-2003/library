import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService){}
  create(data:any){ return this.prisma.book.create({ data }); }
  update(id:number, data:any){ return this.prisma.book.update({ where:{id}, data }); }
  delete(id:number){ return this.prisma.book.delete({ where:{id} }); }
  list(query:any){
    const where:any = {};
    if(query.authorId) where.authorId = Number(query.authorId);
    if(query.isBorrowed !== undefined) where.isBorrowed = query.isBorrowed === 'true';
    return this.prisma.book.findMany({ where, include:{ author:true, borrows:true }});
  }
  find(id:number){ return this.prisma.book.findUnique({ where:{id}, include:{ author:true, borrows:true } }); }
}