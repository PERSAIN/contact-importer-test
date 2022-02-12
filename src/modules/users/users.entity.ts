import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Contact } from '../contact-importer/contact.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true, length: 20, nullable: false })
  username: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @OneToMany((_type) => Contact, (contact) => contact.user, { eager: true })
  contacts: Contact[];

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updateddAt: Date;
}
