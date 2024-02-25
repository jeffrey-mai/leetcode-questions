import minWindow from '../hard/76-minimum-window-substring';

describe('76-minimum-window-substring test', () => {
  it('input: "ADOBECODEBANC", "ABC"', () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toEqual("BANC");
  })

  it('input: "a", "a"', () => {
    expect(minWindow("a", "a")).toEqual("a");
  })

  it('input: "a", "aa"', () => {
    expect(minWindow("a", "aa")).toEqual("");
  })
})