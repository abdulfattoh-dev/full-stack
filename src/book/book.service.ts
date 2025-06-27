import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Author } from 'src/author/entities/author.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
    @InjectRepository(Author) private readonly authorRepo: Repository<Author>,
  ) {}

  async create(createBookInput: CreateBookInput) {
    try {
      const author = await this.authorRepo.findOne({
        where: { id: createBookInput.author_id },
      });
      if (!author) {
        throw new NotFoundException('author not found');
      }
      const book = this.bookRepo.create({ ...createBookInput, author });
      return this.bookRepo.save(book);
    } catch (error) {
      throw new HttpException(
        error.message || 'Internal server error',
        error.response?.status || 500,
      );
    }
  }

  async findAll() {
    try {
      const books = await this.bookRepo.find({ relations: ['author'] });
      return books;
    } catch (error) {
      throw new HttpException(
        error.message || 'Internal server error',
        error.response?.status || 500,
      );
    }
  }

  async findOne(id: number) {
    try {
      const book = await this.bookRepo.findOne({
        where: { id },
        relations: ['author'],
      });
      if (!book) {
        throw new NotFoundException('book not found');
      }
      return book;
    } catch (error) {
      throw new HttpException(
        error.message || 'Internal server error',
        error.response?.status || 500,
      );
    }
  }

  async update(id: number, updateBookInput: UpdateBookInput) {
    try {
      const book = await this.bookRepo.findOne({
        where: { id },
        relations: ['author'],
      });
      if (!book) {
        throw new NotFoundException('book not found');
      }
      let author = book.author;
      if (updateBookInput.author_id) {
        const isAuthor = await this.authorRepo.findOne({
          where: { id: updateBookInput.author_id },
        });
        if (!isAuthor) {
          throw new NotFoundException('author not found');
        }
        author = isAuthor;
        delete updateBookInput.author_id;
      }
      await this.bookRepo.update({ id }, { ...updateBookInput, author });
      const updatedBook = await this.bookRepo.findOne({
        where: { id },
        relations: ['author']
      });
      return updatedBook;
    } catch (error) {
      throw new HttpException(
        error.message || 'Internal server error',
        error.response?.status || 500,
      );
    }
  }

  async remove(id: number) {
    try {
      const book = await this.bookRepo.findOne({ where: { id } });
      if (!book) {
        throw new NotFoundException('book not found');
      }
      await this.bookRepo.delete({ id });
      return book;
    } catch (error) {
      throw new HttpException(
        error.message || 'Internal server error',
        error.response?.status || 500,
      );
    }
  }
}
