import { Entity, Column } from 'typeorm';

@Entity('users')
export class User {
  @Column({ length: 255 })
  firstname: string;

  @Column({ length: 255 })
  lastname: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({ select: false, length: 255 })
  password: string;
}