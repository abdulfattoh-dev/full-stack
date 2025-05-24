import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './entities/country.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country) private model: typeof Country
  ) { }

  async create(createCountryDto: CreateCountryDto) {
    const country = await this.model.create({ ...createCountryDto });
    return country;
  }

  async findAll() {
    const countries = await this.model.findAll({ include: { model: User } });
    return countries;
  }

  async findOne(id: number) {
    const country = await this.model.findByPk(id, { include: { model: User } });

    if (!country) {
      return "not found"
    }

    return country;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const country = await this.model.update(updateCountryDto, { where: { id }, returning: true });
    return country[1][0];
  }

  async remove(id: number) {
    await this.model.destroy({ where: { id } });
    return "success";
  }
}
