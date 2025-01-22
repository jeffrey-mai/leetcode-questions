var pivotIndex = function(nums) {
  let leftSum = 0, rightSum = nums.reduce((prev, num) => prev += num) - nums[0];
  for(let i = 0; i < nums.length; i++){
    if(i){
      leftSum += nums[i-1];
      rightSum -= nums[i-1] + nums[i];
    }
    console.log(leftSum, rightSum);
    if(rightSum === 0) return i;
  }
  return -1;
};

console.log(pivotIndex([2,1,-1]));