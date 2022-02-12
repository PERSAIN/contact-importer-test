import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from './jwt/jwt-payload.interface';
import { AuthSignInDto, AuthSignUpDto } from './dtos';
import { AuthRepository } from './auth.repository';
import { compare } from 'bcrypt';
import { User } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository) private authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authSignUpDto: AuthSignUpDto): Promise<void> {
    const { username, email } = authSignUpDto;
    const user: User = await this.authRepository.findOne({
      where: [{ username }, { email }],
    });
    if (user) {
      throw new ConflictException('username or email already exists');
    }
    return this.authRepository.createUser(authSignUpDto);
  }

  async signIn(authSignInDto: AuthSignInDto): Promise<{ accessToken: string }> {
    const { email, password } = authSignInDto;
    const user: User = await this.authRepository.findOne({ email });

    if (!user) {
      throw new NotFoundException('email does not exist');
    }

    const isMatch: boolean = await compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('invalid credentials');
    }

    const payload: IJwtPayload = { id: user.id, email: user.email };
    const accessToken: string = await this.jwtService.sign(payload);
    return { accessToken };
  }
}
