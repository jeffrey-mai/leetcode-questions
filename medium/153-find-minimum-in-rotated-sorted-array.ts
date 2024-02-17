// 

function findMin(nums: number[]): number {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};

export default findMin;