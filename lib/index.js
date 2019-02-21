"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = __importDefault(require("./component"));
exports.Component = component_1.default;
const configurable_1 = __importDefault(require("./configurable"));
exports.Configurable = configurable_1.default;
const addAttribute_1 = __importDefault(require("./utility/addAttribute"));
exports.addAttribute = addAttribute_1.default;
const addContent_1 = __importDefault(require("./utility/addContent"));
exports.addContent = addContent_1.default;
const addToElement_1 = __importDefault(require("./utility/addToElement"));
exports.addToElement = addToElement_1.default;
const clearContent_1 = __importDefault(require("./utility/clearContent"));
exports.clearContent = clearContent_1.default;
const createElement_1 = __importDefault(require("./utility/createElement"));
exports.createElement = createElement_1.default;
// import getRealElement from './utility/getRealElement';
// import getRealContent from './utility/getRealContent';
const sanitizeAttributeName_1 = __importDefault(require("./utility/sanitizeAttributeName"));
exports.sanitizeAttributeName = sanitizeAttributeName_1.default;
const setAttribute_1 = __importDefault(require("./utility/setAttribute"));
exports.setAttribute = setAttribute_1.default;
const setContent_1 = __importDefault(require("./utility/setContent"));
exports.setContent = setContent_1.default;
//# sourceMappingURL=index.js.map