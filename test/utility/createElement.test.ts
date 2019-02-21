import createElement from '../../src/utility/createElement';

describe('createElement', () =>
{
  it('creates element', () =>
  {
    const tagName = 'div';
    const element = createElement(tagName);
    expect(element).toBeDefined();
    expect(element.tagName.toLowerCase()).toBe(tagName);
  });

  it('creates element with content', () =>
  {
    const tagName = 'div';
    const content = 'content';
    const element = createElement(tagName, content);
    expect(element).toBeDefined();
    expect(element.innerHTML).toBe(content);
  });

  it('creates element with attributes', () =>
  {
    const tagName = 'div';
    const id = 'foo';
    const className = 'foo-class';
    const element = createElement(tagName, null, { id, className });
    expect(element).toBeDefined();
    expect(element.id).toBe(id);
    expect(element.className).toBe(className);
  });
});