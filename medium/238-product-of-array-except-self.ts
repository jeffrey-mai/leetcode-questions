// inputs: nums (int[]), 
// returns "answer" (arr) such that 
  // answer[i] = product of all ele of nums except nums[i]

function productExceptSelf(nums: number[]): number[] {
  const output = new Array(nums.length).fill(1);
  let leftMult = 1, rightMult = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }
  return output;
};

console.log(productExceptSelf([-1,1,0,-3,3]));

export default productExceptSelf;