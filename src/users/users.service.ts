import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  private users: UserEntity[] = [];

  getUsers() {
    return this.users;
  }

  getUser(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) return user;

    return null;
  }

  createUser(createUserDto: CreateUserDto) {
    const user = { id: uuid(), ...createUserDto };
    this.users.push(user);

    return user;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex((user) => user.id === id);

    const user = this.users[index];
    const updatedUser = {
      id: user.id,
      username: updateUserDto.username || user.username,
      age: updateUserDto.age || user.age,
      hobbies: updateUserDto.hobbies || user.hobbies,
    };

    this.users[index] = updatedUser;

    return updatedUser;
  }

  deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
