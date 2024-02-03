// input: nums (int[]), target (int)
// return the index of the 2 nums that add up to target

function twoSum(nums: number[], target: number): number[] {
  const hash: any = {};
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) return [hash[target - n], i];
		hash[n] = i;
	}
	return [];
};

console.log(twoSum([2,7,16,15,8], 9));
console.log(twoSum([3,2,4], 6));

export default twoSum;