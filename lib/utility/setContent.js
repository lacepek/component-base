"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addContent_1 = __importDefault(require("./addContent"));
const clearContent_1 = __importDefault(require("./clearContent"));
const setContent = (target, content) => {
    if (!content || !target) {
        return null;
    }
    clearContent_1.default(target);
    addContent_1.default(target, content);
    return target;
};
exports.default = setContent;
//# sourceMappingURL=setContent.js.map