const summaryRanges = (nums) => {
  const ans = [];
  let pointer = 0;
  for(let i = 1; i <= nums.length; i++){
    if(nums[i-1] + 1 != nums[i]){
      if(pointer + 1 == i) ans.push(`${nums[pointer]}`);
      else ans.push(`${nums[pointer]}->${nums[i-1]}`);
      pointer = i;
    }
  }
  return ans;
};

console.log(summaryRanges([0,2,3,4,6,8,9]));