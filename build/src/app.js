"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var database_1 = __importDefault(require("./database"));
var server_1 = require("./server");
var app = server_1.server.start();
exports.app = app;
database_1.default.init();
