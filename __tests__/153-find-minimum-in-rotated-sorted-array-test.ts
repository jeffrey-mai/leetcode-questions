import findMin from '../medium/153-find-minimum-in-rotated-sorted-array';

describe('153-find-minimum-in-rotated-sorted-array test', () => {
  it('input: [3,6,7,11], 8', () => {
    expect(findMin([3,4,5,1,2])).toEqual(1);
  })

  it('input: [4,5,6,7,0,1,2]', () => {
    expect(findMin([4,5,6,7,0,1,2])).toEqual(0);
  })

  it('input: [11,13,15,17]', () => {
    expect(findMin([11,13,15,17])).toEqual(11);
  })
})