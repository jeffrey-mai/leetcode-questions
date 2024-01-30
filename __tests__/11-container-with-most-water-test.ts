import maxArea from '../medium/11-container-with-most-water';

describe('11-container-with-most-water test', () => {
  it('input: [1,8,6,2,5,4,8,3,7]', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49);
  })

  it('input: [1,1]', () => {
    expect(maxArea([1,1])).toEqual(1);
  })
})