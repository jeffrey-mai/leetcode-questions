function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map();
  for(let i = 0; i < nums.length; i++){
    if(map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) return true;
    else map.set(nums[i], i);
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));

export default containsNearbyDuplicate;