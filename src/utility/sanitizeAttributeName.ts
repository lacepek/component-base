const sanitizeAttributeName = (name: string): string =>
{
  switch (name) {
    case 'className':
      return 'class';
    case 'forId':
      return 'for';
    case 'ariaLabel':
      return 'aria-label';
    case 'ariaHidden':
      return 'aria-hidden';
  }

  return name;
};

export default sanitizeAttributeName;