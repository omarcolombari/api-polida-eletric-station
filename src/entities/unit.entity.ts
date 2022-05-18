import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinTable,
  OneToMany,
} from "typeorm";
import Client from "./client.entity";
import ServiceOrder from "./serviceOrder.entity";

@Entity("units")
export default class Unit {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  street: string;

  @Column()
  st_number: string;

  @Column()
  district: string;

  @Column("float")
  voltage: number;

  @Column("float")
  cable_meter: number;

  @ManyToOne((type) => Client, (client) => client.units, {
    onDelete: "CASCADE",
  })
  @JoinTable()
  client: Client;

  @OneToMany((type) => ServiceOrder, (serviceOrder) => serviceOrder.unit, {
    eager: true,
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinTable()
  service_order: ServiceOrder[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
