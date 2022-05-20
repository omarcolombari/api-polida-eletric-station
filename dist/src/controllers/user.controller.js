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
const authUser_service_1 = __importDefault(require("../services/sessions/authUser.service"));
const createUser_service_1 = __importDefault(require("../services/users/createUser.service"));
const deleteUser_service_1 = __importDefault(require("../services/users/deleteUser.service"));
const listUsers_service_1 = __importDefault(require("../services/users/listUsers.service"));
const showUser_service_1 = __importDefault(require("../services/users/showUser.service"));
const updateUser_service_1 = __importDefault(require("../services/users/updateUser.service"));
class UserController {
    static store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf, name, password, contact, isAdmin } = req.body;
            const createUser = new createUser_service_1.default();
            const user = yield createUser.execute({
                cpf,
                name,
                password,
                contact,
                isAdmin,
            });
            return res.status(201).json(user);
        });
    }
    static session(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf, password } = req.body;
            const auth = new authUser_service_1.default();
            const token = yield auth.execute({ cpf, password });
            return res.status(200).json(token);
        });
    }
    static index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listUsers = new listUsers_service_1.default();
            const users = yield listUsers.execute();
            return res.status(200).json(users);
        });
    }
    static show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = req.params;
            const { id, isAdmin } = req.user;
            const showUser = new showUser_service_1.default();
            const user = yield showUser.execute({ user_id, id, isAdmin });
            return res.status(200).json(user);
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, contact } = req.body;
            const { id } = req.user;
            const updateUser = new updateUser_service_1.default();
            const user = yield updateUser.execute({
                id,
                password,
                contact,
            });
            return res.status(200).json(user);
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.user;
            const deleteUser = new deleteUser_service_1.default();
            const userDeleted = yield deleteUser.execute({ id });
            return res.status(200).json({ message: "User deleted successfully." });
        });
    }
}
exports.default = UserController;
