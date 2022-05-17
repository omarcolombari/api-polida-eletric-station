import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("service_type")
export default class ServiceType {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column("float")
  price: number;
}
