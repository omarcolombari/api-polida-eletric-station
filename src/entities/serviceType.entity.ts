import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import ServiceOrder from "./serviceOrder.entity";

@Entity("service_type")
export default class ServiceType {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column("float")
  price: number;

  @OneToMany(type => ServiceOrder, serviceOrder => serviceOrder.service_type, {
    eager: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  service_order: ServiceOrder[];
}