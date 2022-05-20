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
const serviceType_entity_1 = __importDefault(require("../../entities/serviceType.entity"));
const errors_1 = require("../../errors");
const utils_1 = require("../../utils");
const serviceTypeCreateService = ({ type, price, }) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceTypeRepository = data_source_1.AppDataSource.getRepository(serviceType_entity_1.default);
    const typelAlreadyExists = yield serviceTypeRepository.findOne({
        where: { name: type },
    });
    if (typelAlreadyExists) {
        throw new errors_1.AppError("Type already exists", 409);
    }
    const serviceType = new serviceType_entity_1.default();
    serviceType.name = type;
    serviceType.price = (0, utils_1.fixedFloat)(price);
    serviceTypeRepository.create(serviceType);
    yield serviceTypeRepository.save(serviceType);
    return serviceType;
});
exports.default = serviceTypeCreateService;
