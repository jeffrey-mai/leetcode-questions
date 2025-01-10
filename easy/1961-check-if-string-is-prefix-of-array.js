const isPrefixString= (s, words) => {
  let word = "";
  for(const ele of words){
    word += ele;
    if(s == word) return true;
  }
  return false;
}

console.log(isPrefixString("iloveleetcode", ["i","love","leetcode","apples"]))