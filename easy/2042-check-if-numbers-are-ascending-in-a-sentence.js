const areNumbersAscending = (s) => {
  let nums = s.split(' ').map((x) => +x).filter((x) => x);
  for (let i = 1; i < nums.length; i++){
    if (nums[i - 1] >= nums[i]) return false;
  }
  return true;
};

console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"));