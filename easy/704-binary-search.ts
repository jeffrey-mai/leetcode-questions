// inputs: nums (array of int), target (int)
  // nums --> sorted in ascending,
// check if target is in nums
  // if true: return target index
  // if false: return -1

// function search(nums: number[], target: number): number {
//     let lo = 0, hi = nums.length - 1;
//     while(lo < hi) {
//         let mid = lo + Math.floor((hi - lo + 1)/2);
//         if(target < nums[mid]) hi = mid - 1;
//         else lo = mid;
//     }
//     return nums[lo] === target ? lo : -1;
// };

function search(nums: number[], target: number, lo: number = 0, hi: number = nums.length - 1): number {
  if(lo > hi) return -1;
  const mid = Math.floor((hi + lo) / 2);
  if(nums[mid] < target) return search(nums, target, mid + 1, hi);
  else if(nums[mid] > target) return search(nums, target, lo, mid - 1);
  return mid;
}

export default search;