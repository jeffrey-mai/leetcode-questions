function dailyTemperatures(temperatures: number[]): number[] {
  // const results = Array(temperatures.length).fill(0);
  // const stack: number[] = [];
  // for(let i = 0; i < temperatures.length; i++) {
  //   while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
  //     const temp = stack.pop();
  //     if(temp !== undefined) results[temp] = i - temp;
  //   }
  //   stack.push(i);
  // }
  // return results;

  const stack = [], ans = new Array(temperatures.length).fill(0);
  for(let i = 0; i < temperatures.length; i++){
    while(stack.length && temperatures[stack[stack.length-1]] < temperatures[i]){
      ans[stack[stack.length-1]] = i - stack[stack.length-1];
      stack.pop();
    }
    stack.push(i);
  }
  return ans;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))

export default dailyTemperatures;