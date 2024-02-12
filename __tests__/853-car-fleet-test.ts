import carFleet from '../medium/853-car-fleet';

describe('853-car-fleet test', () => {
  it('input: 12, [10,8,0,5,3], [2,4,1,1,3]', () => {
    expect(carFleet(12, [10,8,0,5,3], [2,4,1,1,3])).toEqual(3);
  })

  it('input: 10, [3], [3]', () => {
    expect(carFleet(10, [3], [3])).toEqual(1);
  })

  it('input: 100, [0,2,4], [4,2,1]', () => {
    expect(carFleet(100, [0,2,4], [4,2,1])).toEqual(1);
  })
})