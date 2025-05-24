import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "src/users/entities/user.entity";


@Table({ tableName: "countries" })
export class Country extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    country: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    capital: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    area: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    population: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    valuta: string;

    @HasMany(() => User)
    users: User[];
}
