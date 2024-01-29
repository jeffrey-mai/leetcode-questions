import search from '../easy/704-binary-search';

describe('704-binary-search test', () => {
  it('input: [-1,0,3,5,9,12], 9', () => {
    expect(search([-1,0,3,5,9,12], 9)).toEqual(4);
  })

  it('input: [-1,0,3,5,9,12], 2', () => {
    expect(search([-1,0,3,5,9,12], 2)).toEqual(-1);
  })
})