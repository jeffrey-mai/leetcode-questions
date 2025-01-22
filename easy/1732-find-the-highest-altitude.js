var largestAltitude = function(gain) {
  let ans = 0, curr = 0;
  for(const num of gain){
    curr += num;
    ans = Math.max(ans, curr);
  }
  return ans;
};

console.log(largestAltitude([-5,1,5,0,-7]));