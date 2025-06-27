import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Author } from 'src/author/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author])],
  providers: [BookResolver, BookService],
})
export class BookModule {}
