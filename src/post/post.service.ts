import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private model: Model<Post>
  ) { }

  async create(createPostDto: CreatePostDto) {
    try {
      createPostDto.user = new Types.ObjectId(createPostDto.user);
      const post = await this.model.create(createPostDto);

      return post;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    try {
      const posts = await this.model.find().populate("user");

      return posts;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const post = await this.model.findById(id).populate("user");

      if (!post) {
        throw new NotFoundException(`Post not found by id ${id}`);
      }

      return post;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    try {
      const post = await this.model.findByIdAndUpdate(id, updatePostDto);

      if (!post) {
        throw new NotFoundException(`Post not found by id ${id}`);
      }

      return post;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const post = await this.model.findByIdAndDelete(id);

      if (!post) {
        throw new NotFoundException(`Post not found by id ${id}`);
      }

      return { message: "Post deleted successfully" };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
