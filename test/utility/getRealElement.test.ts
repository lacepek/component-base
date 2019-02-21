import Component from './../../src/component';
import getRealElement from '../../src/utility/getRealElement';
import createElement from '../../src/utility/createElement';

describe('getRealElement', () =>
{
  it('get real content from component', () =>
  {
    const component = new Component();
    component.element = createElement('div');
    const content = getRealElement(component);

    expect(component.element).toBe(content);
  });

  it('get real content from element', () =>
  {
    const element = createElement('div');
    const content = getRealElement(element);

    expect(element).toBe(content);
  });
});