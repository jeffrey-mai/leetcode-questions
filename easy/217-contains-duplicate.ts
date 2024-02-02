// input: nums (int[])
// if value appears <=2, return true; else return false

function containsDuplicate(nums: number[]): boolean {
  // const cache: any = {};
  // for(let i = 0; i < nums.length; i++){
  //   if(!cache[nums[i]]) cache[nums[i]] = 1;
  //   else return true;
  // }
  // return false;

  const set = new Set<number>(nums);
  return set.size < nums.length;
};

export default containsDuplicate;