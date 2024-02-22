import characterReplacement from '../medium/424-longest-repeating-character-replacement';

describe('424-longest-repeating-character-replacement test', () => {
  it('input: ("AABABBA", 1', () => {
    expect(characterReplacement("AABABBA", 1)).toEqual(4);
  })

  it('input: "AABA", 0', () => {
    expect(characterReplacement("AABA", 0)).toEqual(2);
  })

  it('input: "ABAB", 2', () => {
    expect(characterReplacement("ABAB", 2)).toEqual(4);
  })
})