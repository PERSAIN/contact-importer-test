import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UsersDto } from '../users/dtos/users.dtos';

export const GetUser = createParamDecorator(
  (_data: any, ctx: ExecutionContext): UsersDto => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
