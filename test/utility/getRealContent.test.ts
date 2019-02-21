import Component from './../../src/component';
import getRealContent from '../../src/utility/getRealContent';
import createElement from '../../src/utility/createElement';

describe('getRealContent', () =>
{
  it('get real content from component', () =>
  {
    const component = new Component();
    component.element = createElement('div');
    const content = getRealContent(component);

    expect(component.element).toBe(content);
  });

  it('get real content from element', () =>
  {
    const element = createElement('div');
    const content = getRealContent(element);

    expect(element).toBe(content);
  });
});