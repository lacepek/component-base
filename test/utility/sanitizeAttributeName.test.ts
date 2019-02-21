import sanitizeAttributeName from '../../src/utility/sanitizeAttributeName';

describe('getRealElement', () =>
{
  it('get real content from component', () =>
  {
    const className = sanitizeAttributeName('className');
    const forId = sanitizeAttributeName('forId');
    const ariaHidden = sanitizeAttributeName('ariaHidden');
    const ariaLabel = sanitizeAttributeName('ariaLabel');

    expect(className).toBe('class');
    expect(forId).toBe('for');
    expect(ariaHidden).toBe('aria-hidden');
    expect(ariaLabel).toBe('aria-label');
  });
});