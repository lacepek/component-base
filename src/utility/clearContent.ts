import getRealElement from './getRealElement';

const clearContent = (target: any): HTMLElement =>
{
  const realElement = getRealElement(target);

  while (realElement.firstChild) {
    realElement.removeChild(realElement.firstChild);
  }

  return realElement;
};

export default clearContent;