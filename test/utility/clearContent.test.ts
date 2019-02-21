import createElement from '../../src/utility/createElement';
import Component from './../../src/component';
import clearContent from '../../src/utility/clearContent';

describe('clearContent', () =>
{
  it('clears content from element', () =>
  {
    const content = 'content';
    const element = createElement('div', content);
    const newElement = clearContent(element);
    expect(newElement).toBeDefined();
    expect(newElement.innerHTML).toBe('');
  });

  it('clears content from component', () =>
  {
    const content = 'content';
    const component = new Component();
    component.element = createElement('div', content);
    const newElement = clearContent(component);
    expect(newElement).toBeDefined();
    expect(newElement.innerHTML).toBe('');
  });
});