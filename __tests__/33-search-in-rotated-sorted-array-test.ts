import search from '../medium/33-search-in-rotated-sorted-array';

describe('33-search-in-rotated-sorted-array test', () => {
  it('input: [4,5,6,7,0,1,2], 0', () => {
    expect(search([4,5,6,7,0,1,2], 0)).toEqual(4);
  })

  it('input: [4,5,6,7,0,1,2], 3', () => {
    expect(search([4,5,6,7,0,1,2], 3)).toEqual(-1);
  })

  it('input: [-1], 0', () => {
    expect(search([-1], 0)).toEqual(-1);
  })
})