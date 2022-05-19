import { MigrationInterface, QueryRunner } from "typeorm";

export class FixClientUnitRelationship1652879683112 implements MigrationInterface {
    name = 'FixClientUnitRelationship1652879683112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "units" DROP CONSTRAINT "FK_400d8aa737858df971982b18586"`);
        await queryRunner.query(`ALTER TABLE "units" ADD CONSTRAINT "FK_400d8aa737858df971982b18586" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "units" DROP CONSTRAINT "FK_400d8aa737858df971982b18586"`);
        await queryRunner.query(`ALTER TABLE "units" ADD CONSTRAINT "FK_400d8aa737858df971982b18586" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
