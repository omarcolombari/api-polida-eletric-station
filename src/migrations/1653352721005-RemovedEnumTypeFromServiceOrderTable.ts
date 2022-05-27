import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovedEnumTypeFromServiceOrderTable1653352721005 implements MigrationInterface {
    name = 'RemovedEnumTypeFromServiceOrderTable1653352721005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_order" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."statusEnum"`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD "status" character varying NOT NULL DEFAULT 'Aberto'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_order" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."statusEnum" AS ENUM('Aberto', 'Fechado')`);
        await queryRunner.query(`ALTER TABLE "service_order" ADD "status" "public"."statusEnum" NOT NULL DEFAULT 'Aberto'`);
    }

}
