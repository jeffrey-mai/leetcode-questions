import TimeMap from '../medium/981-time-based-key-value-store';

describe('981-time-based-key-value-store test', () => {
  const timeMap = new TimeMap();
  
  it('Creating a TimeMap', () => {
    expect(timeMap.map instanceof Map).toBe(true);
  })

  it('Set and Get method', () => {
    timeMap.set("foo", "bar", 1);
    expect(timeMap.get("foo", 1)).toEqual("bar");
  })
})