"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_yup_middleware_1 = require("express-yup-middleware");
const orderService_controller_1 = __importDefault(require("../../controllers/orderService.controller"));
const createOrderService_validation_1 = __importDefault(require("../../validations/createOrderService.validation"));
const orderRouter = (0, express_1.Router)();
exports.default = () => {
    orderRouter.post("/", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: createOrderService_validation_1.default }), orderService_controller_1.default.store);
    orderRouter.get("/", orderService_controller_1.default.index);
    orderRouter.get("/:id", orderService_controller_1.default.show);
    orderRouter.get("/me", orderService_controller_1.default.showPerUserId);
    orderRouter.patch("/:id", orderService_controller_1.default.update);
    return orderRouter;
};
