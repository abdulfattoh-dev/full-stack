import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author) private readonly repo: Repository<Author>,
  ) {}

  async create(createAuthorInput: CreateAuthorInput) {
    try {
      const author = this.repo.create(createAuthorInput);
      return this.repo.save(author);
    } catch (error) {
      throw new HttpException(
        error.message || 'Internal server error',
        error.response?.status || 500,
      );
    }
  }

  async findAll() {
    try {
      const authors = await this.repo.find({ relations: ['books'] });
      return authors;
    } catch (error) {
      throw new HttpException(
        error.message || 'Internal server error',
        error.response?.status || 500,
      );
    }
  }

  async findOne(id: number) {
    try {
      const author = await this.repo.findOne({
        where: { id },
        relations: ['books'],
      });
      if (!author) {
        throw new NotFoundException('not found');
      }
      return author;
    } catch (error) {
      throw new HttpException(
        error.message || 'Internal server error',
        error.response?.status || 500,
      );
    }
  }

  async update(id: number, updateAuthorInput: UpdateAuthorInput) {
    try {
      await this.repo.update({ id }, updateAuthorInput);
      const author = await this.repo.findOne({ where: { id } });
      return author;
    } catch (error) {
      throw new HttpException(
        error.message || 'Internal server error',
        error.response?.status || 500,
      );
    }
  }

  async remove(id: number) {
    try {
      const author = await this.repo.findOne({ where: { id } });
      await this.repo.delete({ id });
      return author;
    } catch (error) {
      throw new HttpException(
        error.message || 'Internal server error',
        error.response?.status || 500,
      );
    }
  }
}
