import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableUnits1652923484075 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "units",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "street",
            type: "varchar",
          },
          {
            name: "st_number",
            type: "varchar",
          },
          {
            name: "district",
            type: "varchar",
          },
          {
            name: "voltage",
            type: "float",
          },
          {
            name: "cable_meter",
            type: "float",
          },
          {
            name: "clientId",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("units");
  }
}
