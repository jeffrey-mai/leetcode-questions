var maxOperations = function(nums, k) {
  let left = 0, right = nums.length-1, ans = 0;
  nums.sort((a,b) => a-b);
  while(left < right){
    const temp = nums[left] + nums[right];
    if(temp === k){
      left++;
      right--;
      ans++;
    }
    else if(temp < k) left++;
    else right--;
  }
  return ans;
};

console.log(maxOperations([4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], 2));