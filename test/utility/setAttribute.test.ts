import createElement from '../../src/utility/createElement';
import setAttribute from '../../src/utility/setAttribute';

describe('setAttribute', () =>
{
  it('sets class attribute', () =>
  {
    const className = 'foo-class';
    const element = createElement('div');
    const newElement = setAttribute(element, 'className', className);

    expect(newElement).toBeDefined();
    expect(newElement.className).toBe(className);
  });
});