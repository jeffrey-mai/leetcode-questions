function dailyTemperatures(temperatures: number[]): number[] {
  const results = Array(temperatures.length).fill(0);
  const stack: number[] = [];
  for(let i = 0; i < temperatures.length; i++) {
    while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const temp = stack.pop();
      if(temp !== undefined) results[temp] = i - temp;
    }
    stack.push(i);
  }
  return results;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))

export default dailyTemperatures;