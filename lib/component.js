"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configurable_1 = __importDefault(require("./configurable"));
const createElement_1 = __importDefault(require("./utility/createElement"));
const addContent_1 = __importDefault(require("./utility/addContent"));
const clearContent_1 = __importDefault(require("./utility/clearContent"));
/**
 * Base configurable component
 * @template T - type of state
 */
class Component extends configurable_1.default {
    constructor(config = null) {
        super();
        this.attributes = null;
        this._config = {};
        this.setDefaultProps();
        this._config = config;
        this.init();
        this.preRender();
        this.render();
        this.postRender();
    }
    show() {
        this.element.style.visibility = 'visible';
    }
    hide() {
        this.element.style.visibility = 'hidden';
    }
    setState(state) {
        this.state = Object.assign({}, state);
        clearContent_1.default(this.element);
        this.render();
    }
    getState() {
        return Object.assign({}, this.state);
    }
    init() {
        this.configure(this._config);
        this.parentElement = this.getParentElement();
    }
    preRender() {
        if (!this.element) {
            this.element = this.createElement();
        }
    }
    render() { }
    postRender() {
        if (this.element) {
            this.parentElement = this.getParentElement();
            if (!this.element.parentElement && this.parentElement) {
                addContent_1.default(this.parentElement, this.element);
            }
        }
    }
    getParentElement() {
        if (this.parentElement) {
            return this.parentElement;
        }
        else if (this.parentSelector) {
            return document.querySelector(this.parentSelector);
        }
        return null;
    }
    setDefaultProps() {
        this.attributes = { id: null, className: null, style: null };
        this.parentElement = null;
        this.element = null;
        this.parentSelector = null;
        this.tag = 'div';
        this.parent = null;
        this.state = {};
    }
    createElement(tag = this.tag, content, attributes = this.attributes) {
        if (!tag) {
            tag = 'div';
        }
        return createElement_1.default(tag, content, attributes);
    }
}
exports.default = Component;
//# sourceMappingURL=component.js.map