import minEatingSpeed from '../medium/875-koko-eating-bananas';

describe('875-koko-eating-bananas test', () => {
  it('input: [3,6,7,11], 8', () => {
    expect(minEatingSpeed([3,6,7,11], 8)).toEqual(4);
  })

  it('input: [30,11,23,4,20], 5', () => {
    expect(minEatingSpeed([30,11,23,4,20], 5)).toEqual(30);
  })
})