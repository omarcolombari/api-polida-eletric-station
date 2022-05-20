"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitRoutes = void 0;
const express_1 = require("express");
const express_yup_middleware_1 = require("express-yup-middleware");
const units_controller_1 = require("../../controllers/units.controller");
const ensureAuth_middleware_1 = __importDefault(require("../../middlewares/ensureAuth.middleware"));
const verifyAdmin_middleware_1 = __importDefault(require("../../middlewares/verifyAdmin.middleware"));
const createUnit_validation_1 = __importDefault(require("../../validations/createUnit.validation"));
const router = (0, express_1.Router)();
const unitRoutes = () => {
    router.use(ensureAuth_middleware_1.default);
    router.use(verifyAdmin_middleware_1.default);
    router.post("/", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: createUnit_validation_1.default }), units_controller_1.UnitsController.store);
    router.patch("/:unit_id", units_controller_1.UnitsController.update);
    router.delete("/:unit_id", units_controller_1.UnitsController.delete);
    return router;
};
exports.unitRoutes = unitRoutes;
