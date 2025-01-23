var closeStrings = function(word1, word2) {
  if(word1.length !== word2.length) return false;

  // tracking each letter count
  const hm1 = new Map(), hm2 = new Map();
  for(const char of word1){
    hm1.set(char, hm1.get(char) + 1 || 1);
  }
  for(const char of word2){
    hm2.set(char, hm2.get(char) + 1 || 1);
  }

  // checking for similar chars
  for(const [key, val] of hm1){
    if(!hm2.get(key)) return false;
  }

  // checking for same values
  const letters1 = String(Array.from(hm1.values()).sort((a,b) => a-b));
  const letters2 = String(Array.from(hm2.values()).sort((a,b) => a-b));
  if(letters1 !== letters2) return false;

  return true;
};

console.log(closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff"));
// console.log(closeStrings("cabbba", "abbccc"));
// console.log(closeStrings("abbbzcf", "babzzcz"));