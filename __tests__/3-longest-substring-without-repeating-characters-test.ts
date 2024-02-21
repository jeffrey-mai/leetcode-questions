import lengthOfLongestSubstring from '../medium/3-longest-substring-without-repeating-characters';

describe('3-longest-substring-without-repeating-characters test', () => {
  it('input: "abcabcbb"', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
  })

  it('input: "bbbbb"', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
  })

  it('input: "pwwkew"', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  })
})