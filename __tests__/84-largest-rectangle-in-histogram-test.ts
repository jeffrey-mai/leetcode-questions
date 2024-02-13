import maxArea from '../hard/84-largest-rectangle-in-histogram';

describe('84-largest-rectangle-in-histogram test', () => {
  it('input: [2,1,5,6,2,3]', () => {
    expect(maxArea([2,1,5,6,2,3])).toEqual(10);
  })

  it('input: [2,4]', () => {
    expect(maxArea([2,4])).toEqual(4);
  })
})