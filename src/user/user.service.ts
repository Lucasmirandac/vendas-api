import { CreateUserDto } from './dtos/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './interfaces/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private users: UserEntity[];

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);
    return await this.userRepository.save({
      ...createUserDto,
      password: hash,
    });
  }

  async getUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }
}
