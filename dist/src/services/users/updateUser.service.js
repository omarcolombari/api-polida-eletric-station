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
const data_source_1 = require("../../data-source");
const user_entity_1 = __importDefault(require("../../entities/user.entity"));
const errors_1 = require("../../errors");
class UpdateUserService {
    execute({ id, password, contact }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.default);
            const user = yield userRepository.findOne({ where: { id } });
            if (!user) {
                throw new errors_1.AppError("User not found", 401);
            }
            if (password) {
                if ((0, bcrypt_1.compareSync)(password, user.password)) {
                    throw new errors_1.AppError("Please, inform a different password.", 409);
                }
                user.password = yield (0, bcrypt_1.hash)(password, 8);
            }
            contact ? (user.contact = contact) : user.contact;
            yield userRepository.save(user);
            return user;
        });
    }
}
exports.default = UpdateUserService;
