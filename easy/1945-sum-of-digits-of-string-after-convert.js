function getLucky(s, k){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let nums = '', ans = 0;
  for(const char of s){
    nums += alphabet.indexOf(char) + 1;
    console.log(char, nums);
  }
  for(let i = 0; i < k; i++){
    ans = 0;
    for(const char of String(nums)){
      ans += parseInt(char);
    }
    nums = String(ans);
  }
  return ans;
}

console.log(getLucky("leetcode", 2));