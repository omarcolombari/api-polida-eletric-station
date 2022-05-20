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
const createOrder_service_1 = __importDefault(require("../services/OrderServices/createOrder.service"));
const listOrders_service_1 = __importDefault(require("../services/OrderServices/listOrders.service"));
const showOrder_service_1 = __importDefault(require("../services/OrderServices/showOrder.service"));
const showOrderPerUserId_service_1 = __importDefault(require("../services/OrderServices/showOrderPerUserId.service"));
const updateOrder_service_1 = __importDefault(require("../services/OrderServices/updateOrder.service"));
class OrderServiceController {
    static store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, unitId, serviceTypeId, reschedule, status } = req.body;
            const createOrder = new createOrder_service_1.default();
            const order = yield createOrder.execute({
                userId,
                serviceTypeId,
                unitId,
                reschedule,
                status,
            });
            return res.status(201).json(order);
        });
    }
    static index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listOrders = new listOrders_service_1.default();
            const orders = yield listOrders.execute();
            return res.json(orders);
        });
    }
    static show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showOrder = new showOrder_service_1.default();
            const order = yield showOrder.execute(id);
            return res.json(order);
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { status, reschedule } = req.body;
            const updateOrder = new updateOrder_service_1.default();
            const updatedOrder = yield updateOrder.execute({ id, reschedule, status });
            return res.status(201).json(updatedOrder);
        });
    }
    static showPerUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.user;
            const showOrderPerIdService = new showOrderPerUserId_service_1.default();
            const orders = yield showOrderPerIdService.execute(id);
        });
    }
}
exports.default = OrderServiceController;
