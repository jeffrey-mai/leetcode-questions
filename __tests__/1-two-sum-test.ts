import twoSum from '../easy/1-two-sum';

describe('1-two-sum test', () => {
  it('input: [2,7,11,15], 9', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
  })

  it('input: [3,2,4], 6', () => {
    expect(twoSum([3,2,4], 6)).toEqual([1,2]);
  })
})