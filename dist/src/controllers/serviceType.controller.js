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
const serviceTypeCreate_service_1 = __importDefault(require("../services/serviceType/serviceTypeCreate.service"));
const serviceTypeDelete_service_1 = __importDefault(require("../services/serviceType/serviceTypeDelete.service"));
const serviceTypeList_service_1 = __importDefault(require("../services/serviceType/serviceTypeList.service"));
class ServiceTypeController {
    static store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const serviceType = yield (0, serviceTypeCreate_service_1.default)(data);
            return res.status(201).json(serviceType);
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const type = yield (0, serviceTypeDelete_service_1.default)(id);
            return res.status(204).json();
        });
    }
    static show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = yield (0, serviceTypeList_service_1.default)();
            return res.json(services);
        });
    }
}
exports.default = ServiceTypeController;
