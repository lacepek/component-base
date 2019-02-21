"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Configurable {
    configure(config) {
        for (const property in config) {
            if (config.hasOwnProperty(property)) {
                this[property] = config[property];
            }
        }
    }
    setDefaultProps() { }
}
exports.default = Configurable;
//# sourceMappingURL=configurable.js.map