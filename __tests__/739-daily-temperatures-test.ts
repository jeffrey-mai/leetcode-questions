import dailyTemperatures from '../medium/739-daily-temperatures';

describe('739-daily-temperatures test', () => {
  it('input: [73,74,75,71,69,72,76,73]', () => {
    expect(dailyTemperatures([73,74,75,71,69,72,76,73]))
      .toEqual([1,1,4,2,1,1,0,0]);
  })

  it('input: [30,40,50,60]', () => {
    expect(dailyTemperatures([30,40,50,60])).toEqual([1,1,1,0]);
  })
})