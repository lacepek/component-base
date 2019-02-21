import addToElement from './addToElement';

const addContent = (target: any, content: any): HTMLElement | null =>
{
  if (!content || !target) {
    return null;
  }

  if (content instanceof Array) {
    for (const item of content) {
      addToElement(target, item);
    }
  } else {
    addToElement(target, content);
  }

  return target;
};

export default addContent;