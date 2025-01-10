const reversePrefix = (word, ch) => {
  let reverse = "", index = word.indexOf(ch)+1;
  if(index == -1) return word;
  for(const char of word.slice(0, index)){
    reverse = char + reverse;
  }
  return reverse + word.slice(index)
}

console.log(reversePrefix("abcdefd", "d"));