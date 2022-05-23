import { MigrationInterface, QueryRunner } from "typeorm";

export class includesDefaultValues1653324969335 implements MigrationInterface {
    name = 'includesDefaultValues1653324969335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "ClientFK"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "ServiceFK"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "UserFK"`);
        await queryRunner.query(`ALTER TABLE "units" DROP CONSTRAINT "UnitFK"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP COLUMN "clientId"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP COLUMN "serviceId"`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD "unitId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD "serviceTypeId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_86d40c3585c372cd360af8a7633" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a" FOREIGN KEY ("serviceTypeId") REFERENCES "service_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "units" ADD CONSTRAINT "FK_400d8aa737858df971982b18586" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "units" DROP CONSTRAINT "FK_400d8aa737858df971982b18586"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_86d40c3585c372cd360af8a7633"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP COLUMN "serviceTypeId"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP COLUMN "unitId"`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD "serviceId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD "clientId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "units" ADD CONSTRAINT "UnitFK" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "UserFK" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "ServiceFK" FOREIGN KEY ("serviceId") REFERENCES "service_type"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "ClientFK" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

}
