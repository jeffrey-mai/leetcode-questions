const kthDistinct = (arr, k) => {
  const map = new Map();
  for(const ele of arr){
    map.set(ele, (map.get(ele) || 0) + 1);
  }
  for(const [key, val] of map){
    if(val == 1 && --k == 0) return key;
  }
  return "";
};

console.log(kthDistinct(["d","b","c","b","c","a"], 2));