import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt-strategies/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthRepository } from './auth.repository';
import { ConfigurationKeys } from '../../config/config.keys.enum';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get(ConfigurationKeys.JWT),
          signOptions: {
            expiresIn: 3600,
          },
        };
      },
    }),
    TypeOrmModule.forFeature([AuthRepository]),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
