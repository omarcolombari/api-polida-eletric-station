"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const verifyAdminMiddleware = (req, res, next) => {
    try {
        const { isAdmin } = req.user;
        if (!isAdmin) {
            throw new errors_1.AppError("User is not admin.", 409);
        }
        next();
    }
    catch (err) {
        if (err instanceof errors_1.AppError) {
            (0, errors_1.AppErrorHandler)(err, res);
        }
    }
};
exports.default = verifyAdminMiddleware;
