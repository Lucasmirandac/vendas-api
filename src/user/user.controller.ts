import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async getUser(): Promise<User[]> {
    return await this.userService.getUsers();
  }
}
