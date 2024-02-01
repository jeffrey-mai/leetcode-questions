// 

function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[k - 2] !== nums[i]) nums[k++] = nums[i];
  }
  return k;
};

console.log(removeDuplicates([1,1,1,2,2,3]));

export default removeDuplicates;