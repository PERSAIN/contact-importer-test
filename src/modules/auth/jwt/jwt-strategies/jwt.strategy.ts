import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IJwtPayload } from '../jwt-payload.interface';
import { User } from '../../../users/users.entity';
import { ConfigService } from '@nestjs/config';
import { AuthRepository } from '../../auth.repository';
import { ConfigurationKeys } from '../../../../config/config.keys.enum';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(AuthRepository) private authRepository: AuthRepository,
    private configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get(ConfigurationKeys.JWT),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: IJwtPayload): Promise<User> {
    const { email } = payload;
    const user: User = await this.authRepository.findOne({ email });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
