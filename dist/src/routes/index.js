"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_routes_1 = __importDefault(require("./clients/clients.routes"));
const user_1 = require("./user");
const serviceType_routes_1 = require("./serviceType/serviceType.routes");
const units_routes_1 = require("../routes/units/units.routes");
const orderServices_routes_1 = __importDefault(require("../routes/orderServiceRoutes/orderServices.routes"));
exports.default = (app) => {
    app.use("/clients", (0, clients_routes_1.default)());
    app.use("/users", (0, user_1.userRoutes)());
    app.use("/services", (0, serviceType_routes_1.serviceRoutes)());
    app.use("/units", (0, units_routes_1.unitRoutes)());
    app.use("/orders", (0, orderServices_routes_1.default)());
};
