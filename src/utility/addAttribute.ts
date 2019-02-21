const addAttribute = (element: any, name: string, value: any): HTMLElement =>
{
  switch (name) {
    case 'selected':
      element.selected = value;
      break;
    default:
      element.setAttribute(name, value);
  }

  return element;
};

export default addAttribute;