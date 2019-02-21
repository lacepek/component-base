import Component from '../component';
import sanitizeAttributeName from './sanitizeAttributeName';
import addAttribute from './addAttribute';

const setAttribute = (target: any, name: string, value: any): HTMLElement | null =>
{
  if (target && value != null && value != undefined) {
    name = sanitizeAttributeName(name);

    let element = null;
    if (target instanceof Component) {
      element = target.element;
    } else {
      element = target;
    }

    if (element) {
      addAttribute(element, name, value);

      return element;
    }
  }

  return null;
};

export default setAttribute;