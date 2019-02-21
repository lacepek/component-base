import Configurable from './configurable';
import IHtmlAttributes from './interfaces/iHtmlAttributes';
import IComponentConfig from './interfaces/iComponentConfig';
/**
 * Base configurable component
 * @template T - type of state
 */
declare class Component<T> extends Configurable {
    attributes: IHtmlAttributes;
    parentElement: HTMLElement;
    element: HTMLElement;
    parentSelector: string;
    tag: string;
    parent: Component<T>;
    events: any;
    protected state: any;
    private _config;
    constructor(config?: IComponentConfig<T>);
    show(): void;
    hide(): void;
    setState(state: T): void;
    getState(): T;
    protected init(): void;
    protected preRender(): void;
    protected render(): void;
    protected postRender(): void;
    protected getParentElement(): HTMLElement;
    protected setDefaultProps(): void;
    protected createElement(tag?: string, content?: any, attributes?: IHtmlAttributes): HTMLElement;
}
export default Component;
