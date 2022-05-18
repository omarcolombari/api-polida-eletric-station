import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import ServiceType from "./serviceType.entity";
import Unit from "./unit.entity";
import User from "./user.entity";

@Entity("service_order")
export default class ServiceOrder {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(type => User, user => user.service_order)
  @JoinColumn()
  user: User;

  @ManyToOne(type => ServiceType, serviceType => serviceType.service_order)
  @JoinColumn()
  service_type: ServiceType;

  @ManyToOne(type => Unit, unit => unit.service_order)
  @JoinColumn()
  unit: Unit;

  @Column()
  status: string;

  @Column({ nullable: true })
  reschedule: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}