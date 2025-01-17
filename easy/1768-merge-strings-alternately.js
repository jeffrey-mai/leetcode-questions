const mergeAlternately = (word1, word2) => {
  const length = word1.length <= word2.length ? word2.length : word1.length;
  let ans = "";
  for(let i = 0; i < length; i++){
    if(!word1[i]){
      ans += word2.slice(i);
      break;
    }
    if(!word2[i]){
      ans += word1.slice(i);
      break;
    }
    ans += word1[i] + word2[i];
  }
  return ans;
};

console.log(mergeAlternately("ab", "pqrs"));