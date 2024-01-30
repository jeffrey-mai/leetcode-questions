import threeSum from '../medium/15-3sum';

describe('15-3sum test', () => {
  it('input: [-1,0,1,2,-1,-4]', () => {
    expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]]);
  })

  it('input: [0,1,1]', () => {
    expect(threeSum([0,1,1])).toEqual([]);
  })

  it('input: [0,0,0]', () => {
    expect(threeSum([0,0,0])).toEqual([[0,0,0]]);
  })
})