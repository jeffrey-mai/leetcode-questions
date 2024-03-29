// 

function topKFrequent(nums: number[], k: number): number[] {
  // const map = new Map(), ans = [];
  // for(const num of nums){
  //   map.set(num, map.get(num) + 1 || 1);
  // }
  // for(const [key, value] of map){
  //   ans.push([key, value]);
  // }
  // ans.sort((a, b) => b[1] - a[1]);
  // console.log(ans);
  // console.log(ans.slice(0, k))
  // return ans.slice(0, k).map((x) => x[0]);

  const freq: { [key: number]: number } = {};
  for (const n of nums) {
    freq[n] = freq[n] + 1 || 1;
  }
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(v => Number(v[0]));
};

console.log(topKFrequent([1,1,2,2,3,3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2], 2));

export default topKFrequent;