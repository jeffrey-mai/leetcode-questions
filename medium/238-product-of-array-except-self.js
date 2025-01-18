const productExceptSelf = (nums) => {
  const ans = new Array(nums.length).fill(1);
  console.log(ans);
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    ans[i] *= left;
    left *= nums[i];
  }
  console.log(ans);
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= right;
    right *= nums[i];
  }
  return ans;
};

console.log(productExceptSelf([1,2,3,4]));