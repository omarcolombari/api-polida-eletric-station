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
const serviceOrder_entity_1 = __importDefault(require("../../entities/serviceOrder.entity"));
const index_1 = require("../../errors/index");
class UpdateOrderService {
    execute({ id, status, reschedule }) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceOrderRepository = data_source_1.AppDataSource.getRepository(serviceOrder_entity_1.default);
            const order = yield serviceOrderRepository.findOne({
                where: { id },
            });
            if (!order) {
                throw new index_1.AppError("Service order not found", 404);
            }
            status ? (order.status = status) : order.status;
            reschedule ? (order.reschedule = reschedule) : order.reschedule;
            return yield serviceOrderRepository.save(order);
        });
    }
}
exports.default = UpdateOrderService;
