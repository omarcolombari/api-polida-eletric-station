"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppErrorHandler = exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
const AppErrorHandler = (err, res) => err instanceof AppError
    ? res.status(err.statusCode).json({
        status: "Error",
        message: err.message,
    })
    : res.status(500).json({
        status: "Error",
        message: "Internal server error",
    });
exports.AppErrorHandler = AppErrorHandler;
