import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    id?: number;
  
    @IsOptional()
    username?: string;
  
    @IsOptional()
    first_name?: string | null;
  
    @IsOptional()
    last_name?: string | null;
  
    @ApiProperty({ example: 'password123', description: 'The password of the user' })
    @IsString()
    @MinLength(6)
    password: string;
  
    @ApiProperty({ example: 'test@example.com', description: 'The email of the user' })
    @IsEmail()
    email: string;
  
    @IsOptional()
    roles?: string[]; // Ensure UserRole is correctly imported and used if it's an enum
  
    @IsOptional()
    company_name?: string | null;
  
    @IsOptional()
    industry?: string | null;
  
    @IsOptional()
    employee_count?: number | null;
  
    @IsOptional()
    created_at?: Date | string | null;
  
    @IsOptional()
    updated_at?: Date | string | null;
  }
  


export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
    CLIENT = 'client',
    CREATOR = 'creator'
}
        