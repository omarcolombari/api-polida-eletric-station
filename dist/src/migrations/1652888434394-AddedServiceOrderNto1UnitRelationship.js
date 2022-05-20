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
exports.AddedServiceOrderNto1UnitRelationship1652888434394 = void 0;
class AddedServiceOrderNto1UnitRelationship1652888434394 {
    constructor() {
        this.name = 'AddedServiceOrderNto1UnitRelationship1652888434394';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "service_order" ADD "unitId" uuid`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_bf80b5f47b7ce9ca3475998e14a"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP COLUMN "unitId"`);
        });
    }
}
exports.AddedServiceOrderNto1UnitRelationship1652888434394 = AddedServiceOrderNto1UnitRelationship1652888434394;
