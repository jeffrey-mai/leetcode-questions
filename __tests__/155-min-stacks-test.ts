import MinStack from '../medium/155-min-stack';

describe('155-min-stack test', () => {
  const test = new MinStack();

  it('Testing the properties of new MinStack', () => {
    expect(test.stack).toEqual([]);
  })

  it('Pushing in -2, 0, -3', () => {
    test.push(-2);
    test.push(0);
    test.push(-3);
    expect(test.stack)
      .toEqual([
        {val: -2, min: -2},
        {val: 0, min: -2},
        {val: -3, min: -3}]);
  })

  it('Popping', () => {
    test.pop();
    expect(test.stack)
      .toEqual([
        {val: -2, min: -2},
        {val: 0, min: -2}]);
  })

  it('Top Method', () => {
    expect(test.top()).toEqual(0);
  })

  it('getMin Method', () => {
    expect(test.getMin()).toEqual(-2);
  })
})