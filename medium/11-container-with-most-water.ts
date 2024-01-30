// input: height (arr of int)

function maxArea(height: number[]): number {
  // let ans = 0;
  // for(let i = 0; i < height.length; i++){
  //   for(let j = i + 1; j < height.length; j++){
  //     const temp = Math.min(height[i], height[j]) * (j - i);
  //     ans = Math.max(ans, temp);
  //   }
  // }
  // return ans;

  let low = 0, high = height.length - 1, ans = 0;
  
  while (low <= high) {
    const length = Math.min(height[low], height[high]);
    const area = length * (high - low);
    ans = Math.max(ans, area);
    if (height[low] < height[high]) low++;
    else high--;
  }
  return ans;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

export default maxArea;