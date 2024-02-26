import maxSlidingWindow from '../hard/239-sliding-window-maximum';

describe('239-sliding-window-maximum test', () => {
  it('input: [1,3,-1,-3,5,3,6,7], 3', () => {
    expect(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)).toEqual([3,3,5,5,6,7]);
  })

  it('input: [1], 1', () => {
    expect(maxSlidingWindow([1], 1)).toEqual([1]);
  })
})