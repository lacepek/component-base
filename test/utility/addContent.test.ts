import createElement from '../../src/utility/createElement';
import addContent from '../../src/utility/addContent';

describe('addContent', () =>
{
  it('adds content', () =>
  {
    const content = 'content';
    const addedContent = 'added';
    const element = createElement('div', content);
    const newElement = addContent(element, addedContent);
    expect(newElement).toBeDefined();
    expect(newElement.innerHTML).toBe(content + addedContent);
  });
});