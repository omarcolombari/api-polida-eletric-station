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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const unit_entity_1 = __importDefault(require("../../entities/unit.entity"));
const errors_1 = require("../../errors");
const deleteUnitService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const unitRepository = data_source_1.AppDataSource.getRepository(unit_entity_1.default);
    const verifyUnitExists = yield unitRepository.findOne({ where: { id } });
    if (!verifyUnitExists) {
        throw new errors_1.AppError("Unit not found", 404);
    }
    yield unitRepository.delete(id);
    return true;
});
exports.default = deleteUnitService;
