var maxVowels = function(s, k) {
  const vowels = new Set("aeiouAEIOU");
  let count = 0;
  for(let i = 0; i < k; i++){
    if(vowels.has(s[i])) count++;
  }
  
  let max = count;
  for(let i = k; i < s.length; i++){
    if(vowels.has(s[i])) count += 1 - vowels.has(s[i-k]);
    else count -= vowels.has(s[i-k]);
    max = Math.max(max, count);
  }
  return max;
};

console.log(maxVowels("a", 1));