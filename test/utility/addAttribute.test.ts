import createElement from '../../src/utility/createElement';
import addAttribute from '../../src/utility/addAttribute';

describe('addAttribute', () =>
{
  it('adds id attribute', () =>
  {
    const className = 'foo-class';
    const id = 'foo';
    const element = createElement('div', null, { className });
    const newElement = addAttribute(element, 'id', id);

    expect(newElement).toBeDefined();
    expect(newElement.id).toBe(id);
  });
});