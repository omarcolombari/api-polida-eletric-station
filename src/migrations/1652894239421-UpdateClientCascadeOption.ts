import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateClientCascadeOption1652894239421 implements MigrationInterface {
    name = 'UpdateClientCascadeOption1652894239421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "units" DROP CONSTRAINT "FK_400d8aa737858df971982b18586"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a"`);
        await queryRunner.query(`ALTER TABLE "units" ADD CONSTRAINT "FK_400d8aa737858df971982b18586" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a"`);
        await queryRunner.query(`ALTER TABLE "units" DROP CONSTRAINT "FK_400d8aa737858df971982b18586"`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "units" ADD CONSTRAINT "FK_400d8aa737858df971982b18586" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
