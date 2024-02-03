import groupAnagrams from '../medium/49-group-anagrams';

describe('49-group-anagrams test', () => {
  it('input: ["eat","tea","tan","ate","nat","bat"]', () => {
    expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
      .toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  })

  it('input: [""]', () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
  })

  it('input: ["a"]', () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
  })
})