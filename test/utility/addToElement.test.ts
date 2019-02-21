import addToElement from '../../src/utility/addToElement';
import Component from './../../src/component';
import createElement from '../../src/utility/createElement';

describe('addToElement', () => {
  it('adds to element', () => {
    const element = createElement('div');
    const content = 'content';
    const newElement = addToElement(element, content);
    expect(newElement).toBeDefined();
    expect(newElement.innerHTML).toBe(content);
  });

  it('adds to component', () => {
    const component = new Component();
    component.element = createElement('div');
    const content = 'content';
    const newElement = addToElement(component, content);
    expect(newElement).toBeDefined();
    expect(newElement.innerHTML).toBe(content);
  });
});