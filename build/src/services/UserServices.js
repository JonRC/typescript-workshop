"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var User_1 = require("../Models/User");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.create = function (userData) {
        var user = new User_1.User(userData);
        return user.save();
    };
    UserService.prototype.getAll = function () {
        return User_1.User
            .find()
            .lean();
    };
    UserService.prototype.getOne = function (userId) {
        return User_1.User.findOne({
            _id: userId
        })
            .lean();
    };
    return UserService;
}());
exports.UserService = UserService;
