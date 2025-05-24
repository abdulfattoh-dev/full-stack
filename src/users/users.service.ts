import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { Country } from 'src/countries/entities/country.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private model: typeof User
  ) { }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.model.create({ ...createUserDto });
    return newUser;
  }

  async findAll() {
    const users = await this.model.findAll({ include: { model: Country } });
    return users;
  }

  async findOne(id: number) {
    const user = await this.model.findByPk(id, { include: { model: Country } });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.model.update(updateUserDto, { where: { id }, returning: true });
    return user[1][0];
  }

  async remove(id: number) {
    await this.model.destroy({ where: { id } });
    return {};
  }
}
