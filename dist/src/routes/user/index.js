"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const express_yup_middleware_1 = require("express-yup-middleware");
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const ensureAuth_middleware_1 = __importDefault(require("../../middlewares/ensureAuth.middleware"));
const verifyAdmin_middleware_1 = __importDefault(require("../../middlewares/verifyAdmin.middleware"));
const createUser_validation_1 = __importDefault(require("../../validations/createUser.validation"));
const routes = (0, express_1.Router)();
const userRoutes = () => {
    routes.post("/", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: createUser_validation_1.default }), user_controller_1.default.store);
    routes.post("/login", user_controller_1.default.session);
    routes.use(ensureAuth_middleware_1.default);
    routes.get("/:user_id", user_controller_1.default.show);
    routes.use(verifyAdmin_middleware_1.default);
    routes.get("/", user_controller_1.default.index);
    routes.patch("/:user_id", user_controller_1.default.update);
    routes.delete("/:user_id", user_controller_1.default.delete);
    return routes;
};
exports.userRoutes = userRoutes;
