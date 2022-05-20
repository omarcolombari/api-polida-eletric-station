"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../errors/index");
const errorHandle = (err, req, res, _) => {
    if (err instanceof index_1.AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            code: err.statusCode,
            message: err.message,
        });
    }
    console.log(err.message);
    return res.status(500).json({
        status: "error",
        code: 500,
        message: "Internal server error",
    });
};
exports.default = errorHandle;
