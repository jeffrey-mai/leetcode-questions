var findMaxAverage = function(nums, k) {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let currSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    currSum += nums[i] - nums[i - k];
    if (currSum > maxSum) maxSum = currSum;
  }
  return maxSum / k;
};

console.log(findMaxAverage([0,4,0,3,2], 1));