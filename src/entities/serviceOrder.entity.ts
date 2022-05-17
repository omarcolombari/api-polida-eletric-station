import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Client from "./client.entity";
import ServiceType from "./serviceType.entity";
import User from "./user.entity";

@Entity("service_order")
export default class ServiceOrder {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(type => User, {
    eager: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  user: User;

  @OneToOne(type => ServiceType, {
    eager: true,
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  service_type: ServiceType;

  @ManyToOne(type => Client, client => client.service_orders)
  @JoinColumn()
  client: Client;

  @Column()
  status: string;

  @Column({ nullable: true })
  reschedule: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
