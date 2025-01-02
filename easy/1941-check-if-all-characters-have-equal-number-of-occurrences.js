function areOccurrencesEqual(s) {
  const count = {};
  let max = 1;
  for(const char of s){
    if(count[char]){
      count[char] += 1;
      if(max < count[char]) max = count[char];
    }
    else count[char] = 1;
  }
  for(const val of Object.values(count)){
    if(val != max) return false;
  }
  return true;
};

console.log(areOccurrencesEqual("aaabb"));