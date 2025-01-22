var longestOnes = function(nums, k) {
  let left = 0, right = 0;
  while (right < nums.length) {
    if (nums[right++] === 0) k--;
    if (k < 0 && nums[left++] === 0) k++;
    console.log(left, right);
  }
  return right - left;
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));