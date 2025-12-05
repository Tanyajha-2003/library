import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { BorrowsModule } from './borrows/borrows.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthorsModule, BooksModule, BorrowsModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}