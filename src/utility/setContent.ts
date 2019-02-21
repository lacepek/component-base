import addContent from './addContent';
import clearContent from './clearContent';

const setContent = (target: any, content: any): HTMLElement | null =>
{
  if (!content || !target) {
    return null;
  }

  clearContent(target);

  addContent(target, content);

  return target;
};

export default setContent;