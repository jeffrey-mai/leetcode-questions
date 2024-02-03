// 

function topKFrequent(nums: number[], k: number): number[] {
  const map: any = new Map(), ans = [];
  for(const num of nums){
    map.set(num, map.get(num) + 1 || 1);
  }
  for(const [key, value] of map){
    ans.push([key, value]);
  }
  ans.sort((a, b) => b[1] - a[1]);
  console.log(ans);
  console.log(ans.slice(0, k))
  return ans.slice(0, k).map((x) => x[0]);
};

console.log(topKFrequent([1,1,2,2,3,3], 2));
// console.log(topKFrequent([1], 1));
// console.log(topKFrequent([1, 2], 2));

export default topKFrequent;