var findDifference = function(nums1, nums2) {
  const setNums1 = new Set(nums1), setNums2 = new Set(nums2);
  for(const num of setNums1){
    if(setNums2.has(num)){
      setNums2.delete(num);
      setNums1.delete(num);
    }
  }
  return [[...setNums1], [...setNums2]];
};

console.log(findDifference([1,2,3], [2,4,6]));