import { Injectable } from '@nestjs/common';
import { User } from './users.dto';

@Injectable()
export class UsersService {
  private users: User | [] = [];

  getUsers() {
    return this.users;
  }
}
