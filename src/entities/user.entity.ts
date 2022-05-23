import { Exclude } from "class-transformer";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import ServiceOrder from "./serviceOrder.entity";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  name: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  contact: string;

  @Column()
  isAdmin: boolean;

  @OneToMany((type) => ServiceOrder, (serviceOrder) => serviceOrder.user, {
    eager: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  service_order: ServiceOrder[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
