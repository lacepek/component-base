"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = __importDefault(require("../component"));
const sanitizeAttributeName_1 = __importDefault(require("./sanitizeAttributeName"));
const addAttribute_1 = __importDefault(require("./addAttribute"));
const setAttribute = (target, name, value) => {
    if (target && value != null && value != undefined) {
        name = sanitizeAttributeName_1.default(name);
        let element = null;
        if (target instanceof component_1.default) {
            element = target.element;
        }
        else {
            element = target;
        }
        if (element) {
            addAttribute_1.default(element, name, value);
            return element;
        }
    }
    return null;
};
exports.default = setAttribute;
//# sourceMappingURL=setAttribute.js.map