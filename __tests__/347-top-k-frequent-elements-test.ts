import topKFrequent from '../medium/347-top-k-frequent-elements';

describe('347-top-k-frequent-elements test', () => {
  it('input: [1,1,1,2,2,3], 2', () => {
    expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1,2]);
  })

  it('input: [1], 1', () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  })
})