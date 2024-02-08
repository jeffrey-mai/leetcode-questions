import trap from '../hard/42-trapping-rain-water';

describe('42-trapping-rain-water test', () => {
  it('input: [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6);
  })

  it('input: [4,2,0,3,2,5]', () => {
    expect(trap([4,2,0,3,2,5])).toEqual(9);
  })
})