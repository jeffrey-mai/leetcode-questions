// input: nums
// return longest consecutive ele sequence

function longestConsecutive(nums: number[]): number {
  if(!nums.length) return 0;
  let longest = 1, temp = 1;
  nums.sort((a,b) => a - b);
  nums = nums.filter((ele, i) => ele !== nums[i+1]);
  console.log(nums);
  for(let i = 1; i < nums.length; i++){
    if(nums[i-1] + 1 === nums[i]){
      temp++;
      longest = Math.max(longest, temp);
    }
    else temp = 1;
  }
  return longest;
};

console.log(longestConsecutive([1,2,0,1]));

export default longestConsecutive;