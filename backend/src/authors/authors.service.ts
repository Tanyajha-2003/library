import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService){}
  create(data:any){ return this.prisma.author.create({ data }); }
  update(id:number, data:any){ return this.prisma.author.update({ where:{id}, data }); }
  delete(id:number){ return this.prisma.author.delete({ where:{id} }); }
  list(){ return this.prisma.author.findMany({ include: { books: true } }); }
  find(id:number){ return this.prisma.author.findUnique({ where:{id}, include:{ books:true } }); }
}