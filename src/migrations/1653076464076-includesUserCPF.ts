import { MigrationInterface, QueryRunner } from "typeorm";

export class includesUserCPF1653076464076 implements MigrationInterface {
    name = 'includesUserCPF1653076464076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_86d40c3585c372cd360af8a7633"`);
        await queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "unitId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "serviceTypeId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "units" DROP CONSTRAINT "FK_400d8aa737858df971982b18586"`);
        await queryRunner.query(`ALTER TABLE "units" ALTER COLUMN "clientId" SET NOT NULL`);
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
        await queryRunner.query(`ALTER TABLE "units" ALTER COLUMN "clientId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "units" ADD CONSTRAINT "FK_400d8aa737858df971982b18586" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "serviceTypeId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "unitId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_86d40c3585c372cd360af8a7633" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a" FOREIGN KEY ("serviceTypeId") REFERENCES "service_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_230b925048540454c8b4c481e1c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf"`);
    }

}
