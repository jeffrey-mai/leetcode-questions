// 

function trap(height: number[]): number {
  let left = 0, right = height.length - 1, left_max = 0, right_max = 0, water = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] > left_max) left_max = height[left];
      else water += left_max - height[left];
      left++;
    } else {
      if (height[right] > right_max) right_max = height[right];
      else water += right_max - height[right];
      right--;
    }
  }
  return water;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

export default trap;