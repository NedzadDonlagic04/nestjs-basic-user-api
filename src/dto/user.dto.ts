import { IsEmail, IsNumber, IsString } from "@nestjs/class-validator";
import { Max, Min } from "class-validator";

export class UserDTO {
    @IsString()
    user_name: string;
    
    @IsNumber()
    @Min(13)
    @Max(130)
    user_age: number;
    
    @IsEmail()
    user_email: string;
}