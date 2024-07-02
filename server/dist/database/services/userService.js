"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.findUser = findUser;
const user_1 = __importDefault(require("../models/user"));
function createUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = new user_1.default({ email, password });
            yield user.save();
            return user;
        }
        catch (err) {
            console.log(err);
        }
    });
}
function findUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_1.default.findOne({ email }).exec();
            return user;
        }
        catch (err) {
            console.log(err);
        }
    });
}
//# sourceMappingURL=userService.js.map