import reverse from '../medium/7-reverse-integer';

describe('6-zigzag-conversion test', () => {
  it('input: 123', () => {
    expect(reverse(123)).toEqual(321);
  })

  it('input: -123', () => {
    expect(reverse(-123)).toEqual(-321);
  })
  
  it('input: 999999999999', () => {
    expect(reverse(999999999999)).toEqual(0);
  })

  it('input: -888888888888888', () => {
    expect(reverse(-888888888888888)).toEqual(0);
  })
})