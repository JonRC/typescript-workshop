"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var yup_1 = require("yup");
var errorHandler = function (error, request, response, next) {
    if (error instanceof yup_1.ValidationError) {
        return response.status(400).json(error.errors);
    }
    response.status(500).json(error.message);
};
exports.errorHandler = errorHandler;
