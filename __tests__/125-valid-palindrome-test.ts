import isPalindrome from '../easy/125-valid-palindrome';

describe('125-valid-palindrome test', () => {
  it('input: "A man, a plan, a canal: Panama"', () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
  })

  it('input: "race a car"', () => {
    expect(isPalindrome("race a car")).toEqual(false);
  })

  it('input: " "', () => {
    expect(isPalindrome(" ")).toEqual(true);
  })
})