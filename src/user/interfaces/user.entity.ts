import { Column, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  id: number;
  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'password', nullable: false })
  password: string;
  @Column({ name: 'email', nullable: false })
  email: string;
  @Column({ name: 'cpf', nullable: false })
  cpf: string;
  @Column({ name: 'phone' })
  phone: string;
}
