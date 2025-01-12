const thirdMax = (nums) => {
  const distinctNums = [...new Set(nums)].sort((a,b) => b-a);
  return distinctNums.length >= 3 ? distinctNums[2] : distinctNums[0];
};

console.log(thirdMax([1,2]));