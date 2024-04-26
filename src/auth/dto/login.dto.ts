import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'user@example.com', description: 'Email address of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'yourpassword', description: 'Password for the account', minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;
}
