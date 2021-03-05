"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var options = {
    timestamps: true
};
var userSchema = new mongoose_1.Schema({
    name: String,
    email: { type: String, required: true, },
    birth: Date,
    address: {
        country: String,
        state: String,
        city: String
    }
}, options);
var User = mongoose_1.model('users', userSchema);
exports.User = User;
