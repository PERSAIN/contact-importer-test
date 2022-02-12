import { IsNotEmpty } from 'class-validator';

export class UsersDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;
}
