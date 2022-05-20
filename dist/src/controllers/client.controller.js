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
const data_source_1 = require("../data-source");
const client_entity_1 = __importDefault(require("../entities/client.entity"));
const CreateClient_service_1 = __importDefault(require("../services/clients/CreateClient.service"));
const DeleteClient_service_1 = __importDefault(require("../services/clients/DeleteClient.service"));
const ListOneClient_service_1 = __importDefault(require("../services/clients/ListOneClient.service"));
class ClientController {
    static store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, contact } = req.body;
            const createClient = new CreateClient_service_1.default();
            const client = yield createClient.execute({
                contact,
                name,
            });
            return res.status(201).json(client);
        });
    }
    static index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientRepository = data_source_1.AppDataSource.getRepository(client_entity_1.default);
            const clients = yield clientRepository.find();
            return res.json(clients);
        });
    }
    static show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { client_id } = req.params;
            const client = new ListOneClient_service_1.default();
            const listedClient = yield client.execute({
                id: client_id,
            });
            return res.json(listedClient);
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { client_id } = req.params;
            const client = new DeleteClient_service_1.default();
            yield client.execute({
                id: client_id,
            });
            return res.status(204).json();
        });
    }
}
exports.default = ClientController;
