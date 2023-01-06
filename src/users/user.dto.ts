import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsInt()
  age: number;

  @IsArray()
  @IsString({ each: true })
  hobbies: string[];
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsInt()
  @IsOptional()
  age?: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  hobbies?: string[];
}
