import { EntityRepository, Repository } from 'typeorm';
import { User } from '../users/users.entity';
import { AuthSignUpDto } from './dtos';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async createUser(authSignUpDto: AuthSignUpDto): Promise<void> {
    const { username, email, password } = authSignUpDto;
    const salt: string = await genSalt(10);
    const hashedPassword: string = await hash(password, salt);
    const user = this.create({ username, email, password: hashedPassword });
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
