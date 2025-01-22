var longestSubarray = function(nums) {
  // when two 0s exist in the sliding window, left++
  let left = 0, count0 = 0, i = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count0++;
    if (count0 > 1 && nums[left++] === 0) count0--;
  }
  return i - left - 1;
};

console.log(longestSubarray([0,1,1,1,0,1,1,0,1]));
console.log(longestSubarray([1,1,0,1]));
console.log(longestSubarray([1,1,1]));