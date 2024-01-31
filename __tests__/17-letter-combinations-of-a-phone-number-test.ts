import letterCombinations from '../medium/17-letter-combinations-of-a-phone-number';

describe('17-letter-combinations-of-a-phone-number test', () => {
  it('input: "23"', () => {
    expect(letterCombinations("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
  })

  it('input: ""', () => {
    expect(letterCombinations("")).toEqual([]);
  })

  it('input: "2"', () => {
    expect(letterCombinations("2")).toEqual(["a","b","c"]);
  })
})