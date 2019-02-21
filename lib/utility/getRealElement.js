"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRealElement = (target) => {
    if (target instanceof HTMLElement) {
        return target;
    }
    else {
        return target.element;
    }
};
exports.default = getRealElement;
//# sourceMappingURL=getRealElement.js.map