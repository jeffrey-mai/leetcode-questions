// 

function trap(height: number[]): number {
  // let left = 0, right = height.length - 1, left_max = 0, right_max = 0, water = 0;
  // while (left <= right) {
  //   if (height[left] <= height[right]) {
  //     if (height[left] > left_max) left_max = height[left];
  //     else water += left_max - height[left];
  //     left++;
  //   } else {
  //     if (height[right] > right_max) right_max = height[right];
  //     else water += right_max - height[right];
  //     right--;
  //   }
  // }
  // return water;

  // let left = 1, right = height.length, ans = 0, leftMax = 0;
  // for(let i = 1; i < height.length; i++){
  //   const length = Math.min(height[right], height[left]);
  //   if(height[left] <= height[right] && length > height[left]) ans += length - height[left++];
  //   else{
  //     right--;
  //     if(height[right] < height[right+1]) ans += height[right+1] - height[right];
  //   }
  // }
  // return ans;

  let left = 0, right = height.length-1, leftMax = 0, rightMax = 0, ans = 0;
  while(left <= right){
    if (height[left] <= height[right]) {
      if (height[left] > leftMax) leftMax = height[left++];
      else ans += leftMax - height[left++];
    } 
    else {
      if (height[right] > rightMax) rightMax = height[right--];
      else ans += rightMax - height[right--];
    }
  }
  return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
// console.log(trap([4,2,0,3,2,5]));

export default trap;