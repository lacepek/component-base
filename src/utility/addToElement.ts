import getRealElement from './getRealElement';
import getRealContent from './getRealContent';

const addToElement = (target: any, content: any): HTMLElement =>
{
  const realElement = getRealElement(target);
  const realContent = getRealContent(content);

  if (!realElement || !realContent) {
    return null;
  }

  if (typeof (realContent) === 'string') {
    realElement.innerHTML += realContent;
  } else {
    realElement.appendChild(realContent);
  }

  return realElement;
};

export default addToElement;