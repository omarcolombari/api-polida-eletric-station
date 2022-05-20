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
exports.TableCreation1652827518165 = void 0;
class TableCreation1652827518165 {
    constructor() {
        this.name = "TableCreation1652827518165";
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "service_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" double precision NOT NULL, CONSTRAINT "PK_0a11a8d444eff1346826caed987" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "password" character varying NOT NULL, "contact" character varying NOT NULL, "isAdmin" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "service_order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, "reschedule" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "serviceTypeId" uuid, "clientId" uuid, CONSTRAINT "REL_86d40c3585c372cd360af8a763" UNIQUE ("userId"), CONSTRAINT "REL_49b5a0c2c4adb037d7835c9c61" UNIQUE ("serviceTypeId"), CONSTRAINT "PK_b01a59b48a0dfbd84dd8221364a" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "units" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying NOT NULL, "st_number" character varying NOT NULL, "district" character varying NOT NULL, "voltage" double precision NOT NULL, "cable_meter" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, CONSTRAINT "PK_5a8f2f064919b587d93936cb223" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "contact" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_86d40c3585c372cd360af8a7633" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a" FOREIGN KEY ("serviceTypeId") REFERENCES "service_type"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_5544d26d1d3fbea2dee0904e59a" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "units" ADD CONSTRAINT "FK_400d8aa737858df971982b18586" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "units" DROP CONSTRAINT "FK_400d8aa737858df971982b18586"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_5544d26d1d3fbea2dee0904e59a"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_86d40c3585c372cd360af8a7633"`);
            yield queryRunner.query(`DROP TABLE "clients"`);
            yield queryRunner.query(`DROP TABLE "units"`);
            yield queryRunner.query(`DROP TABLE "service_order"`);
            yield queryRunner.query(`DROP TABLE "users"`);
            yield queryRunner.query(`DROP TABLE "service_type"`);
        });
    }
}
exports.TableCreation1652827518165 = TableCreation1652827518165;
