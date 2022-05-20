"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_yup_middleware_1 = require("express-yup-middleware");
const client_controller_1 = __importDefault(require("../../controllers/client.controller"));
const ensureAuth_middleware_1 = __importDefault(require("../../middlewares/ensureAuth.middleware"));
const verifyAdmin_middleware_1 = __importDefault(require("../../middlewares/verifyAdmin.middleware"));
const createClient_validation_1 = __importDefault(require("../../validations/createClient.validation"));
const clientRouter = (0, express_1.Router)();
exports.default = () => {
    clientRouter.use(ensureAuth_middleware_1.default);
    clientRouter.get("/", client_controller_1.default.index);
    clientRouter.get("/:client_id", client_controller_1.default.show);
    clientRouter.use(verifyAdmin_middleware_1.default);
    clientRouter.post("/", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: createClient_validation_1.default }), client_controller_1.default.store);
    clientRouter.delete("/:client_id", client_controller_1.default.delete);
    return clientRouter;
};
