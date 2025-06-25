import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.prisma.user.create({ data: createUserDto });

      return user;
    } catch (error) {
      throw new HttpException(error, error?.status);
    }
  }

  async findAll() {
    try {
      const users = await this.prisma.user.findMany({ include: { posts: true } });

      return users;
    } catch (error) {
      throw new HttpException(error, error?.status);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id }, include: { posts: true } });

      if (!user) {
        throw new NotFoundException("not found");
      }

      return user;
    } catch (error) {
      throw new HttpException(error, error?.status);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.prisma.user.update({ where: { id }, data: updateUserDto });

      if (!user) {
        throw new NotFoundException("not found");
      }

      return user;
    } catch (error) {
      throw new HttpException(error, error?.status);
    }
  }

  async remove(id: number) {
    try {
      const user = await this.prisma.user.delete({ where: { id } });

      if (!user) {
        throw new NotFoundException("not found");
      }

      return { message: "success" };
    } catch (error) {
      throw new HttpException(error, error?.status);
    }
  }
}
