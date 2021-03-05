"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
var yup = __importStar(require("yup"));
var moment_1 = __importDefault(require("moment"));
var userSchema = yup.object().shape({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    birth: yup.string().test('birth', 'Birth must to be YYYY-MM-DD format', (function (birth) {
        return moment_1.default(birth, 'YYYY-MM-DD').isValid();
    })),
    address: yup.object().shape({
        country: yup.string(),
        state: yup.string(),
        city: yup.string()
    })
});
exports.userSchema = userSchema;
