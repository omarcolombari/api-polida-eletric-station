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
import Unit from "./unit.entity";

@Entity("clients")
export default class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  contact: string;

  @OneToMany(type => Unit, unit => unit.client, {
    eager: true,
  })
  @JoinColumn()
  units: Unit[];

  @OneToMany(type => ServiceOrder, serviceOrder => serviceOrder.client, {
    eager: true,
  })
  @JoinColumn()
  service_orders: ServiceOrder[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
