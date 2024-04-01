import { CreateUserDto } from './dtos/create-user.dto';
import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);
    const user: User = {
      id: this.users.length + 1,
      ...createUserDto,
      password: hash,
    };
    return user;
  }

  async getUsers(): Promise<User[]> {
    return await this.users;
  }
}
