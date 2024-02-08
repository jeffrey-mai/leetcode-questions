// 

function twoSum(numbers: number[], target: number): number[] {
  let left = 0, right = numbers.length - 1;
  while(left < right){
    const sum = numbers[left] + numbers[right];
    if(sum === target) break;
    else if(sum < target) left++;
    else right--;
  }
  return [left+1, right+1];
};

console.log(twoSum([2,7,11,15], 9))

export default twoSum;