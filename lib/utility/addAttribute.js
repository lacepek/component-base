"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addAttribute = (element, name, value) => {
    switch (name) {
        case 'selected':
            element.selected = value;
            break;
        default:
            element.setAttribute(name, value);
    }
    return element;
};
exports.default = addAttribute;
//# sourceMappingURL=addAttribute.js.map