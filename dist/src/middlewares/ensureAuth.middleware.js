"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const errors_1 = require("../errors");
const ensureAuthMiddleware = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            throw new errors_1.AppError("Token is missing.", 401);
        }
        (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                throw new errors_1.AppError("Invalid Token", 401);
            }
            const { sub, isAdmin, cpf } = decoded;
            req.user = { id: sub, cpf, isAdmin };
            next();
        });
    }
    catch (err) {
        if (err instanceof errors_1.AppError) {
            (0, errors_1.AppErrorHandler)(err, res);
        }
    }
};
exports.default = ensureAuthMiddleware;
