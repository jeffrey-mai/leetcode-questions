import isAnagram from '../easy/242-valid-anagram';

describe('242-valid-anagram test', () => {
  it('input: "anagram", "nagaram"', () => {
    expect(isAnagram("anagram", "nagaram")).toEqual(true);
  })

  it('input: "rat", "car"', () => {
    expect(isAnagram("rat", "car")).toEqual(false);
  })
})