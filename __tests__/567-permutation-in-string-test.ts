import checkInclusion from '../medium/567-permutation-in-string';

describe('567-permutation-in-string test', () => {
  it('input: "ab", "eidbaooo"', () => {
    expect(checkInclusion("ab", "eidbaooo")).toEqual(true);
  })

  it('input: "ab", "eidboaoo"', () => {
    expect(checkInclusion("ab", "eidboaoo")).toEqual(false);
  })
})