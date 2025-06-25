import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createPostDto: CreatePostDto) {
    try {
      const post = await this.prisma.post.create({ data: createPostDto });

      return post;
    } catch (error) {
      throw new HttpException(error, error?.status);
    }
  }

  async findAll() {
    try {
      const posts = await this.prisma.post.findMany({ include: { user: true } });

      return posts;
    } catch (error) {
      throw new HttpException(error, error?.status);
    }
  }

  async findOne(id: number) {
    try {
      const post = await this.prisma.post.findUnique({ where: { id }, include: { user: true } });

      if (!post) {
        throw new NotFoundException("not found");
      }

      return post;
    } catch (error) {
      throw new HttpException(error, error?.status);
    }
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    try {
      const post = await this.prisma.post.update({ where: { id }, data: updatePostDto });

      if (!post) {
        throw new NotFoundException("not found");
      }

      return post;
    } catch (error) {
      throw new HttpException(error, error?.status);
    }
  }

  async remove(id: number) {
    try {
      const post = await this.prisma.post.delete({ where: { id } });

      if (!post) {
        throw new NotFoundException("not found");
      }

      return { message: "Post deleted successfully" };
    } catch (error) {
      throw new HttpException(error, error?.status);
    }
  }
}
