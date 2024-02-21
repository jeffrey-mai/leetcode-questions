import maxProfit from '../easy/121-best-time-to-buy-and-sell-stock';

describe('121-best-time-to-buy-and-sell-stock test', () => {
  it('input: [7,1,5,3,6,4]', () => {
    expect(maxProfit([7,1,5,3,6,4])).toEqual(5);
  })

  it('input: [7,6,4,3,1]', () => {
    expect(maxProfit([7,6,4,3,1])).toEqual(0);
  })
})