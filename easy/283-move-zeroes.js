var moveZeroes = function(nums) {
  // let left = 0;
  // for (let right = 0; right < nums.length; right++) {
  //   if (nums[right] !== 0) {
  //     [nums[left], nums[right]] = [nums[right], nums[left]];
  //     left++;
  //   }
  // }
  // return nums;

  let count = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
      nums[count++] = nums[i];
    }
  }
  for(let i = count; i < nums.length; i++){
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes([0,1,0,3,12]));