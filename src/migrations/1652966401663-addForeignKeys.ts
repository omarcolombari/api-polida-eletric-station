import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class addForeignKeys1652966401663 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "units",
      new TableForeignKey({
        name: "UnitFK",
        columnNames: ["clientId"],
        referencedColumnNames: ["id"],
        referencedTableName: "clients",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "service_order",
      new TableForeignKey({
        name: "ClientFK",
        columnNames: ["clientId"],
        referencedColumnNames: ["id"],
        referencedTableName: "clients",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "service_order",
      new TableForeignKey({
        name: "ServiceFK",
        columnNames: ["serviceId"],
        referencedColumnNames: ["id"],
        referencedTableName: "service_type",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "service_order",
      new TableForeignKey({
        name: "UserFK",
        columnNames: ["userId"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
