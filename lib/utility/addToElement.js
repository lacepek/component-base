"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRealElement_1 = __importDefault(require("./getRealElement"));
const getRealContent_1 = __importDefault(require("./getRealContent"));
const addToElement = (target, content) => {
    const realElement = getRealElement_1.default(target);
    const realContent = getRealContent_1.default(content);
    if (!realElement || !realContent) {
        return null;
    }
    if (typeof (realContent) === 'string') {
        realElement.innerHTML += realContent;
    }
    else {
        realElement.appendChild(realContent);
    }
    return realElement;
};
exports.default = addToElement;
//# sourceMappingURL=addToElement.js.map