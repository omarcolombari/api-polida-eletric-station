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
exports.RemovedServiceOrderClientRelationship1652888871879 = void 0;
class RemovedServiceOrderClientRelationship1652888871879 {
    constructor() {
        this.name = 'RemovedServiceOrderClientRelationship1652888871879';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "service_order" DROP CONSTRAINT "FK_5544d26d1d3fbea2dee0904e59a"`);
            yield queryRunner.query(`ALTER TABLE "service_order" DROP COLUMN "clientId"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "service_order" ADD "clientId" uuid`);
            yield queryRunner.query(`ALTER TABLE "service_order" ADD CONSTRAINT "FK_5544d26d1d3fbea2dee0904e59a" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.RemovedServiceOrderClientRelationship1652888871879 = RemovedServiceOrderClientRelationship1652888871879;
