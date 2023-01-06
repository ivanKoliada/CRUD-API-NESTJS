import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = this.userService.getUser(id);
    if (user) return user;

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  updateUser(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = this.userService.getUser(id);
    if (user) return this.userService.updateUser(id, updateUserDto);

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = this.userService.getUser(id);
    if (user) return this.userService.deleteUser(id);

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
