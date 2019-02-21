import IHtmlAttributes from './iHtmlAttributes';
import Component from '../component';
/**
 * Component config
 * @template T - type of component state
 */
interface IComponentConfig<T> {
    attributes?: IHtmlAttributes;
    parentElement?: HTMLElement;
    element?: HTMLElement;
    parentSelector?: string;
    tag?: string;
    parent?: Component<T>;
    events?: any;
}
export default IComponentConfig;
