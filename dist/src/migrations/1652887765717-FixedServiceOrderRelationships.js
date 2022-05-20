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
exports.FixedServiceOrderRelationships1652887765717 = void 0;
class FixedServiceOrderRelationships1652887765717 {
    constructor() {
        this.name = 'FixedServiceOrderRelationships1652887765717';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_86d40c3585c372cd360af8a7633"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "REL_86d40c3585c372cd360af8a763"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "REL_49b5a0c2c4adb037d7835c9c61"`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_86d40c3585c372cd360af8a7633" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a" FOREIGN KEY ("serviceTypeId") REFERENCES "service_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_86d40c3585c372cd360af8a7633"`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "REL_49b5a0c2c4adb037d7835c9c61" UNIQUE ("serviceTypeId")`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "REL_86d40c3585c372cd360af8a763" UNIQUE ("userId")`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a" FOREIGN KEY ("serviceTypeId") REFERENCES "service_type"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_86d40c3585c372cd360af8a7633" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        });
    }
}
exports.FixedServiceOrderRelationships1652887765717 = FixedServiceOrderRelationships1652887765717;
