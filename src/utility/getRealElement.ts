const getRealElement = (target: any): HTMLElement =>
{
  if (target instanceof HTMLElement) {
    return target;
  } else {
    return target.element;
  }
};

export default getRealElement;