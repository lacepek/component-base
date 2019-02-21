"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addToElement_1 = __importDefault(require("./addToElement"));
const addContent = (target, content) => {
    if (!content || !target) {
        return null;
    }
    if (content instanceof Array) {
        for (const item of content) {
            addToElement_1.default(target, item);
        }
    }
    else {
        addToElement_1.default(target, content);
    }
    return target;
};
exports.default = addContent;
//# sourceMappingURL=addContent.js.map