import longestConsecutive from '../medium/128-longest-consecutive-sequence';

describe('128-longest-consecutive-sequence test', () => {
  it('input: [100,4,200,1,3,2]', () => {
    expect(longestConsecutive([100,4,200,1,3,2])).toEqual(4);
  })

  it('input: [0,3,7,2,5,8,4,6,0,1]', () => {
    expect(longestConsecutive([0,3,7,2,5,8,4,6,0,1])).toEqual(9);
  })

  it('input: [1,2,0,1]', () => {
    expect(longestConsecutive([1,2,0,1])).toEqual(3);
  })
})