"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = __importDefault(require("./../component"));
const getRealContent = (content) => {
    if (content instanceof component_1.default) {
        return content.element;
    }
    else {
        return content;
    }
};
exports.default = getRealContent;
//# sourceMappingURL=getRealContent.js.map