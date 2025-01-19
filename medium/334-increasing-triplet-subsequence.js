const increasingTriplet = (nums) => {
  let a = Infinity, b = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= a) a = nums[i];
    else if (nums[i] <= b) b = nums[i];
    else return true;
  }
  return false;
};

console.log(increasingTriplet([20,100,10,12,5,13]));