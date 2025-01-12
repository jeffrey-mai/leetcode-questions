const findDisappearedNumbers = function(nums) {
  // const ans = [], set = new Set(nums);
  // for(let i = 0; i < nums.length; i++){
  //   if(!set.has(i+1)) ans.push(i+1);
  // }
  // return ans;

  const ans = [];
  // make all existing indexes currently provided in nums all negative numbers
  for(let i = 0; i < nums.length; i++){
    const index = Math.abs(nums[i]) - 1;
    if(nums[index] > 0) nums[index] = -nums[index];
  }
  // positive numbers are the missing indexes
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0) ans.push(i+1);
  }
  return ans;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));