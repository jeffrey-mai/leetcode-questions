function maxSlidingWindow(nums: number[], k: number): number[] {
  // if(nums.length <= 1 && k > 0) return [nums[0]];
  // const ans: number[] = [];
  // if(nums.length <= k) ans.push(Math.max(...nums));
  // else{
  //   for (let left = 0; left <= nums.length - k; left++) {
  //     let right = left + k;
  //     ans.push(Math.max(...nums.slice(left, right)));
  //   }
  // }
  // return ans;

  const n = nums.length, maxTemp: number[] = [], ans: number[] = [];
  let i = 0, j = 0;

  while (j < n) {
    let maxLen = maxTemp.length;
    if (maxLen === 0) maxTemp.push(nums[j]);
    else {
      while (maxLen > 0 && maxTemp[maxLen - 1] < nums[j]) {
        maxTemp.pop();
        maxLen = maxTemp.length;
      }
      maxTemp.push(nums[j]);
    }
    const windowSize = j - i + 1;
    if (windowSize < k) j++;
    else if (windowSize === k) {
      ans.push(maxTemp[0]);
      if (maxTemp[0] === nums[i]) maxTemp.shift();
      i++;
      j++;
    }
  }
  return ans;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// console.log(maxSlidingWindow([1], 1));

export default maxSlidingWindow;