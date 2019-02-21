import Component from './../component';

const getRealContent = (content: any): HTMLElement | string =>
{
  if (content instanceof Component) {
    return content.element;
  } else {
    return content;
  }
};

export default getRealContent;