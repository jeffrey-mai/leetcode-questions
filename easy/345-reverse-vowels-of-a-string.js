const reverseVowels = (s) => {
  const word = s.split(""), vowels = new Set("aeiouAEIOU");
  let start = 0, end = s.length - 1;
  console.log(word);
  
  while(start < end){
    while (start < end && !vowels.has(word[start])) start++;
    while (start < end && !vowels.has(word[end])) end--;
    [word[start], word[end]] = [word[end], word[start]];
    start++;
    end--;
  }
  return word.join("");
};

console.log(reverseVowels("race car"));