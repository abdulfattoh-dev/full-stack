import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        description: "Ismingizni kiriting: ",
        example: "Abdulfattoh",
        required: true
    })
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({
        description: "Familiyangizni kiriting: ",
        example: "Abduxakimov",
        required: true
    })
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({
        description: "Emailingizni kiriting: ",
        example: "abdulfattoh.dev@gmail.com",
        required: true
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: "Telefon raqamingizni kiriting: ",
        example: "+998900071727",
        required: true
    })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({
        description: "Parolingizni kiriting: ",
        example: "********",
        required: true
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        example: "student",
        required: true
    })
    @IsEnum(["student", "teacher", "admin", "superadmin"])
    @IsNotEmpty()
    role: string;
}
