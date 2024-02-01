import generateParenthesis from '../medium/22-generate-parentheses';

describe('22-generate-parentheses test', () => {
  it('input: 3', () => {
    expect(generateParenthesis(3)).toEqual(["((()))","(()())","(())()","()(())","()()()"]);
  })

  it('input: 1', () => {
    expect(generateParenthesis(1)).toEqual(["()"]);
  })

  it('input: 0', () => {
    expect(generateParenthesis(0)).toEqual([""]);
  })
})