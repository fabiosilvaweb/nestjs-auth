import { Injectable } from '@nestjs/common';
import { UserRequest } from '../dtos/user-request';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '123',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    },
  ];

  async create(userData: UserRequest): Promise<User> {
    const userExists = this.findByEmail(userData.email);
    if (userExists) throw new Error('Usuário já cadastrado!');

    const user = {
      id: '123123213',
      ...userData,
    };

    this.users.push(user);

    return user;
  }

  async update(userData: Required<UserRequest>): Promise<User> {
    const userExists = this.findByEmail(userData.email);
    if (!userExists) throw new Error('Usuário não cadastrado!');

    const user = {
      id: '123123213',
      ...userData,
    };

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}
