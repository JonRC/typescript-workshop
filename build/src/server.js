"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var errorHandler_1 = require("./errors/errorHandler");
var routes_1 = require("./routes");
var Server = /** @class */ (function () {
    function Server() {
        var _a;
        this.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
        var app = express_1.default();
        app.use(express_1.default.json());
        app.use(routes_1.router);
        app.use(errorHandler_1.errorHandler);
        this.app = app;
    }
    Server.prototype.start = function () {
        this.app.listen(this.port, function () { return console.log("Server ON"); });
        return this.app;
    };
    return Server;
}());
var server = new Server();
exports.server = server;
