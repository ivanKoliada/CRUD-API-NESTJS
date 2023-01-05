import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [];

  getUsers() {
    return this.users;
  }

  getUser(id: string) {
    return this.users.find((user) => user.id === id);
  }

  createUser(body: Omit<UserDto, 'id'>) {
    const id = uuid();
    const newUser = { id, ...body };
    this.users.push(newUser);

    return newUser;
  }

  updateUser(id: string, body: Omit<UserDto, 'id'>) {
    const index = this.users.findIndex((user) => user.id === id);

    const currentUserState = this.users[index];
    const updatedUserState = {
      id: currentUserState.id,
      username: body.username || currentUserState.username,
      age: body.age || currentUserState.age,
      hobbies: body.hobbies || currentUserState.hobbies,
    };

    this.users[index] = updatedUserState;

    return updatedUserState;
  }

  deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
