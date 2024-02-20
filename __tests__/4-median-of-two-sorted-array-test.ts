import findMedianSortedArrays from '../hard/4-median-of-two-sorted-arrays';

describe('4-median-of-two-sorted-arrays test', () => {
  it('input: [1,3], [2]', () => {
    expect(findMedianSortedArrays([1,3], [2])).toEqual(2);
  })

  it('input: [1,2], [3,4]', () => {
    expect(findMedianSortedArrays([1,2], [3,4])).toEqual(2.5);
  })
})