const compress = (chars) => {
  chars.push(null);
  let s = "", pointer = 0;

  for(let i = 0; i < chars.length; i++){
    if(chars[pointer] !== chars[i]){
      if(i - pointer === 1) s += chars[pointer];
      else s += `${chars[pointer]}${i - pointer}`;
      pointer = i;
    }
  }
  
  chars.splice(0);
  for(const char of s){
    chars.push(char);
  }
  return chars.length;
};

console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));