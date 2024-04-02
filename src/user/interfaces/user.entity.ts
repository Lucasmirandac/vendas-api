import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user', schema: 'public' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
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

  @Column({ name: 'type_user' })
  typeUser: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
