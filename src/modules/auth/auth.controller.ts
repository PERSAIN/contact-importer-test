import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInDto, AuthSignUpDto } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() authSignUpDto: AuthSignUpDto): Promise<void> {
    return this.authService.signUp(authSignUpDto);
  }

  @Post('/signin')
  @UsePipes(ValidationPipe)
  signIn(
    @Body() authSignInDto: AuthSignInDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authSignInDto);
  }
}
