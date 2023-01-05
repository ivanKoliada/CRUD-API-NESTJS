import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @HttpCode(200)
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  @HttpCode(200)
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Post()
  @HttpCode(201)
  createUser(
    @Body('username') username: string,
    @Body('age') age: number,
    @Body('hobbies') hobbies: string[],
  ) {
    return this.userService.createUser({ username, age, hobbies });
  }

  @Put(':id')
  @HttpCode(200)
  updateUser(
    @Param('id') id: string,
    @Body('username') username?: string,
    @Body('age') age?: number,
    @Body('hobbies') hobbies?: string[],
  ) {
    return this.userService.updateUser(id, { username, age, hobbies });
  }

  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
