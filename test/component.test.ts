import Component from './../src/component';
import createElement from '../src/utility/createElement';

describe('Component', () =>
{
  it('creates component', () =>
  {
    const component = new Component();
    expect(component).toBeDefined();
    expect(component.element).toBeDefined();
  });

  it('creates component with parent', () =>
  {
    const parentElement = createElement('div');
    const config = { parentElement };
    const component = new Component(config);
    expect(component.parentElement).toBe(parentElement);
  });

  it('creates component with state and change state', () =>
  {
    const parentElement = createElement('div');
    const config = { parentElement };
    const component = new Component<{ name: string }>(config);
    const state = { name: 'foo' };

    component.setState(state);

    expect(component.getState()).toEqual(state);
  });
});