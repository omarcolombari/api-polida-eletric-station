import { MigrationInterface, QueryRunner } from "typeorm";

export class FixedServiceOrderRelationships1652887765717 implements MigrationInterface {
    name = 'FixedServiceOrderRelationships1652887765717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_86d40c3585c372cd360af8a7633"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "REL_86d40c3585c372cd360af8a763"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "REL_49b5a0c2c4adb037d7835c9c61"`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_86d40c3585c372cd360af8a7633" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a" FOREIGN KEY ("serviceTypeId") REFERENCES "service_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_86d40c3585c372cd360af8a7633"`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "REL_49b5a0c2c4adb037d7835c9c61" UNIQUE ("serviceTypeId")`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "REL_86d40c3585c372cd360af8a763" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a" FOREIGN KEY ("serviceTypeId") REFERENCES "service_type"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_86d40c3585c372cd360af8a7633" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
