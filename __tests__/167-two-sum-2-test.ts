import twoSum from '../medium/167-two-sum-2';

describe('167-two-sum-2 test', () => {
  it('input: [2,7,11,15], 9', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([1,2]);
  })

  it('input: [2,3,4], 6', () => {
    expect(twoSum([2,3,4], 6)).toEqual([1,3]);
  })

  it('input: [-1,0], -1', () => {
    expect(twoSum([-1,0], -1)).toEqual([1,2]);
  })
})