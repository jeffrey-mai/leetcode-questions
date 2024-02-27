// input: nums
// return longest consecutive ele sequence

function longestConsecutive(nums: number[]): number {
  // if(!nums.length) return 0;
  // let longest = 1, temp = 1;
  // nums.sort((a,b) => a - b);
  // nums = nums.filter((ele, i) => ele !== nums[i+1]);
  // console.log(nums);
  // for(let i = 1; i < nums.length; i++){
  //   if(nums[i-1] + 1 === nums[i]){
  //     temp++;
  //     longest = Math.max(longest, temp);
  //   }
  //   else temp = 1;
  // }
  // return longest;

  nums.sort((a, b) => a - b);
  let cache = [], ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let cacheLength = cache.length;
    if (cacheLength === 0 || cache[cacheLength - 1] + 1 === nums[i]){
      cache.push(nums[i]);
      cacheLength++;
    }
    else if (cache[cacheLength - 1] === nums[i]) continue;
    else {
      cache = [];
      cache.push(nums[i]);
    }
    ans = Math.max(ans, cacheLength);
  }
  return ans;
};

console.log(longestConsecutive([-7,-1,3,-9,-4,7,-3,2,4,9,4,-9,8,-7,5,-1,-7]));

export default longestConsecutive;