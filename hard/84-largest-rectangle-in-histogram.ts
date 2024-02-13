// 

function largestRectangleArea(heights: number[]): number {
  // if(heights.length === 1) return heights[0];
  // const stack: number[] = [];
  // for(let i = 0; i < heights.length; i++){
  //   let ans = 0, rectangleSize = heights[i];
  //   if(rectangleSize === heights[i+1]) ans = Math.max(ans, rectangleSize * (i+2))
  //   for(let j = i; j < heights.length; j++){
  //     if(heights[i] > heights[j] && rectangleSize > heights[j]) rectangleSize = heights[j];
  //     ans = Math.max(ans, rectangleSize * (j-i+1));
  //   }
  //   stack.push(ans);
  // }
  // console.log(stack);
  // stack.sort((a,b) => b-a);
  // return stack.length ? stack[0] : 0;

  let maxArea = 0;
  const stack: number[] = [];
  heights = [0].concat(heights).concat([0]);
  for (let i = 0; i < heights.length; i++) {
    while (stack && heights[stack[stack.length - 1]] > heights[i]) {
      const j = stack.pop();
      if(j) maxArea = Math.max((i - stack[stack.length-1] - 1) * heights[j], maxArea);
    }
    stack.push(i);
  }
  return maxArea;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));
console.log(largestRectangleArea([2,4]));

export default largestRectangleArea;