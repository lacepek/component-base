"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addContent_1 = __importDefault(require("./addContent"));
const setAttribute_1 = __importDefault(require("./setAttribute"));
const createElement = (tag, content, attributes) => {
    const element = document.createElement(tag);
    if (attributes) {
        for (const name in attributes) {
            const attribute = attributes[name];
            setAttribute_1.default(element, name, attribute);
        }
    }
    if (content) {
        addContent_1.default(element, content);
    }
    return element;
};
exports.default = createElement;
//# sourceMappingURL=createElement.js.map