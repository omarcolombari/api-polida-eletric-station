import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class ServiceType {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  type: string;

  @Column("float")
  value: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
