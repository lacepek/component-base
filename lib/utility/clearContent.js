"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRealElement_1 = __importDefault(require("./getRealElement"));
const clearContent = (target) => {
    const realElement = getRealElement_1.default(target);
    while (realElement.firstChild) {
        realElement.removeChild(realElement.firstChild);
    }
    return realElement;
};
exports.default = clearContent;
//# sourceMappingURL=clearContent.js.map