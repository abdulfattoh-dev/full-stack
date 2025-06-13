import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private model: Model<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.model.create(createUserDto);

      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    try {
      const users = await this.model.find().populate("posts");

      return users;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.model.findById(id).populate("posts");

      if (!user) {
        throw new NotFoundException(`User not found by id ${id}`);
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.model.findByIdAndUpdate(id, updateUserDto, { new: true });

      if (!user) {
        throw new NotFoundException(`User not found by id ${id}`);
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const user = await this.model.findByIdAndDelete(id);

      if (!user) {
        throw new NotFoundException(`User not found by id ${id}`);
      }

      return { message: "User deleted successfully" };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
