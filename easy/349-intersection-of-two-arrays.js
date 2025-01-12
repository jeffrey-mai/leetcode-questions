const intersection = (nums1, nums2) => {
  // nums1 = [...new Set(nums1)], nums2 = [...new Set(nums2)];
  // const ans = [];
  // for(const ele of nums1){
  //   if(nums2.includes(ele)) ans.push(ele);
  // }
  // return ans;
  
  // const ans = [];
  // nums1.forEach((ele) => {
  //   if(nums2.includes(ele) && !ans.includes(ele)) ans.push(ele);
  // });
  // return ans;

  const ans = new Set();
  nums1.forEach((ele) => {
    if(nums2.includes(ele)) ans.add(ele);
  });
  return [...ans];
};

console.log(intersection([4,9,5], [9,4,9,8,4]));