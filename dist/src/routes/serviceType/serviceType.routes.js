"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = require("express");
const serviceType_controller_1 = __importDefault(require("../../controllers/serviceType.controller"));
const ensureAuth_middleware_1 = __importDefault(require("../../middlewares/ensureAuth.middleware"));
const verifyAdmin_middleware_1 = __importDefault(require("../../middlewares/verifyAdmin.middleware"));
const express_yup_middleware_1 = require("express-yup-middleware");
// import middleware
const createServiceType_validation_1 = __importDefault(require("../../validations/createServiceType.validation"));
const routes = (0, express_1.Router)();
const serviceRoutes = () => {
    routes.use(ensureAuth_middleware_1.default);
    routes.use(verifyAdmin_middleware_1.default);
    routes.post("/", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: createServiceType_validation_1.default }), serviceType_controller_1.default.store);
    routes.get("/", serviceType_controller_1.default.show);
    routes.delete("/:id", serviceType_controller_1.default.delete);
    return routes;
};
exports.serviceRoutes = serviceRoutes;
