import { Column, DataType, IsEmail, Model, Table, Unique } from "sequelize-typescript";

@Table({ tableName: "users" })
export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    lastName: string;

    @Unique
    @IsEmail
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @Column({
        type: DataType.ENUM("student", "teacher", "admin", "superadmin"),
        allowNull: false,
        defaultValue: "student"
    })
    role: string;
}
