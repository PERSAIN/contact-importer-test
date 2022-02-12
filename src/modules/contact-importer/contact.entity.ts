import { Exclude } from 'class-transformer';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((_type) => User, (user) => user.contacts, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
