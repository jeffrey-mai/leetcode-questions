const numOfStrings = (patterns, word) => {
  let ans = 0;
  for(const ele of patterns){
    if(word.indexOf(ele) != -1) ans++;
  }
  return ans;
}

console.log(numOfStrings(["a","abc","bc","d"], "abc"));