import HtmlAttributes from '../interfaces/iHtmlAttributes';
import addContent from './addContent';
import setAttribute from './setAttribute';

const createElement = (tag: string, content?: any, attributes?: HtmlAttributes): HTMLElement =>
{
  const element = document.createElement(tag);

  if (attributes) {
    for (const name in attributes) {
      const attribute = attributes[name];

      setAttribute(element, name, attribute);
    }
  }

  if (content) {
    addContent(element, content);
  }

  return element;
};

export default createElement;