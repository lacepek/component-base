import Configurable from './configurable';
import IHtmlAttributes from './interfaces/iHtmlAttributes';
import IComponentConfig from './interfaces/iComponentConfig';
import createElement from './utility/createElement';
import addContent from './utility/addContent';
import clearContent from './utility/clearContent';

/**
 * Base configurable component
 * @template T - type of state
 */
class Component<T> extends Configurable
{
  public attributes: IHtmlAttributes = null;

  public parentElement: HTMLElement;
  public element: HTMLElement;
  public parentSelector: string;
  public tag: string;
  public parent: Component<T>;

  public events: any;

  protected state: any;

  private _config: any = {};

  public constructor(config: IComponentConfig<T> = null)
  {
    super();

    this.setDefaultProps();

    this._config = config;

    this.init();

    this.preRender();

    this.render();

    this.postRender();
  }

  public show(): void
  {
    this.element.style.visibility = 'visible';
  }

  public hide(): void
  {
    this.element.style.visibility = 'hidden';
  }

  public setState(state: T): void
  {
    this.state = Object.assign({}, state);

    clearContent(this.element);

    this.render();
  }

  public getState(): T
  {
    return Object.assign({}, this.state);
  }

  protected init(): void
  {
    this.configure(this._config);

    this.parentElement = this.getParentElement();
  }

  protected preRender(): void
  {
    if (!this.element) {
      this.element = this.createElement();
    }
  }

  protected render(): void { }

  protected postRender(): void
  {
    if (this.element) {
      this.parentElement = this.getParentElement();
      if (!this.element.parentElement && this.parentElement) {
        addContent(this.parentElement, this.element);
      }
    }
  }

  protected getParentElement(): HTMLElement
  {
    if (this.parentElement) {
      return this.parentElement;
    } else if (this.parentSelector) {
      return document.querySelector(this.parentSelector);
    }

    return null;
  }

  protected setDefaultProps(): void
  {
    this.attributes = { id: null, className: null, style: null };
    this.parentElement = null;
    this.element = null;
    this.parentSelector = null;
    this.tag = 'div';
    this.parent = null;
    this.state = {};
  }


  protected createElement(tag: string = this.tag, content?: any, attributes: IHtmlAttributes = this.attributes): HTMLElement
  {
    if (!tag) {
      tag = 'div';
    }

    return createElement(tag, content, attributes);
  }
}

export default Component;