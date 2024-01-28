import convert from '../medium/6-zigzag-conversion';

describe('6-zigzag-conversion test', () => {
  it('input: "PAYPALISHIRING", 3', () => {
    expect(convert("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
  })

  it('input: "PAYPALISHIRING", 4', () => {
    expect(convert("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI");
  })
  
  it('input: "A", 1', () => {
    expect(convert("A", 1)).toEqual("A");
  })
})