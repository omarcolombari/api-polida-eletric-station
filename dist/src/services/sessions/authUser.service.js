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
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const data_source_1 = require("../../data-source");
const user_entity_1 = __importDefault(require("../../entities/user.entity"));
const errors_1 = require("../../errors");
require("dotenv/config");
class authUserService {
    execute({ cpf, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.default);
            const user = yield userRepository.findOne({ where: { cpf } });
            if (!user || !cpf) {
                throw new errors_1.AppError("Incorrect CPF and/or password.", 401);
            }
            const passwordMatch = yield (0, bcrypt_1.compare)(password, user.password);
            if (!passwordMatch) {
                throw new errors_1.AppError("Incorrect CPF and/or password.", 401);
            }
            const token = (0, jsonwebtoken_1.sign)({ cpf: user.cpf, isAdmin: user.isAdmin }, String(process.env.JWT_SECRET), {
                subject: user.id,
                expiresIn: "24h",
            });
            return { token };
        });
    }
}
exports.default = authUserService;
