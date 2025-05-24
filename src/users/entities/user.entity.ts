import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Country } from "src/countries/entities/country.entity";

@Table({ tableName: "users" })
export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @ForeignKey(() => Country)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    countryId: number;

    @BelongsTo(() => Country, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    country: Country;
}
