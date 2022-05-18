import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovedServiceOrderClientRelationship1652888871879 implements MigrationInterface {
    name = 'RemovedServiceOrderClientRelationship1652888871879'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_5544d26d1d3fbea2dee0904e59a"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP COLUMN "clientId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_order" ADD "clientId" uuid`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_5544d26d1d3fbea2dee0904e59a" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
