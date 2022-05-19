import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedServiceOrderNto1UnitRelationship1652888434394 implements MigrationInterface {
    name = 'AddedServiceOrderNto1UnitRelationship1652888434394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_order" ADD "unitId" uuid`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a"`);
        await queryRunner.query(`ALTER TABLE "service_order" DROP COLUMN "unitId"`);
    }

}
