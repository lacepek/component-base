"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sanitizeAttributeName = (name) => {
    switch (name) {
        case 'className':
            return 'class';
        case 'forId':
            return 'for';
        case 'ariaLabel':
            return 'aria-label';
        case 'ariaHidden':
            return 'aria-hidden';
    }
    return name;
};
exports.default = sanitizeAttributeName;
//# sourceMappingURL=sanitizeAttributeName.js.map