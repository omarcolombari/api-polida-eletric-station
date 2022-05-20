"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.includesUserCPF1653076464076 = void 0;
class includesUserCPF1653076464076 {
    constructor() {
        this.name = 'includesUserCPF1653076464076';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" ADD "cpf" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf")`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_86d40c3585c372cd360af8a7633"`);
            yield queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "unitId" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "serviceTypeId" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "userId" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "units" DROP CONSTRAINT "FK_400d8aa737858df971982b18586"`);
            yield queryRunner.query(`ALTER TABLE "units" ALTER COLUMN "clientId" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_86d40c3585c372cd360af8a7633" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a" FOREIGN KEY ("serviceTypeId") REFERENCES "service_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "units" ADD CONSTRAINT "FK_400d8aa737858df971982b18586" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "units" DROP CONSTRAINT "FK_400d8aa737858df971982b18586"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_86d40c3585c372cd360af8a7633"`);
            yield queryRunner.query(`ALTER TABLE "units" ALTER COLUMN "clientId" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "units" ADD CONSTRAINT "FK_400d8aa737858df971982b18586" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "userId" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "serviceTypeId" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "service_order" ALTER COLUMN "unitId" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_86d40c3585c372cd360af8a7633" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a" FOREIGN KEY ("serviceTypeId") REFERENCES "service_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_230b925048540454c8b4c481e1c"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf"`);
        });
    }
}
exports.includesUserCPF1653076464076 = includesUserCPF1653076464076;
