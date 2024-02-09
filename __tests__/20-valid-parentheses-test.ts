import isValid from '../easy/20-valid-parentheses';

describe('20-valid-parentheses test', () => {
  it('input: "()"', () => {
    expect(isValid("()")).toEqual(true);
  })

  it('input: "()[]{}"', () => {
    expect(isValid("()[]{}")).toEqual(true);
  })

  it('input: "(]"', () => {
    expect(isValid("(]")).toEqual(false);
  })
})