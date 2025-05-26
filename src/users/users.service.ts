import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private model: typeof User
  ) { }

  async create(createUserDto: CreateUserDto) {
    return await this.model.create({ ...createUserDto });
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findOne(id: number) {
    return await this.model.findByPk(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.model.update(updateUserDto, { where: { id }, returning: true })[1][0];
  }

  async remove(id: number) {
    await this.model.destroy({ where: { id } });
    return {}
  }
}
