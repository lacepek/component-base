import createElement from '../../src/utility/createElement';
import setContent from '../../src/utility/setContent';

describe('setContent', () =>
{
  it('sets content', () =>
  {
    const content = 'content';
    const element = createElement('div');
    const newElement = setContent(element, content);
    expect(newElement).toBeDefined();
    expect(newElement.innerHTML).toBe(content);
  });
});