const minTimeToType = (word) => {
  let pointer = 'a'.charCodeAt();
  let time = 0;
  for(const char of word){
    const diff = Math.abs(pointer - char.charCodeAt());
    if(diff > 13){
      time += 26 - diff + 1;
      console.log(char, diff);
    }
    else{
      time += diff + 1;
      console.log(diff);
      console.log(char);
    }
    pointer = char.charCodeAt();
  }
  return time;

  // let pointer = 'a'.charCodeAt(), time = 0;
  // for(const char of word){
  //   const diff = Math.abs(pointer - char.charCodeAt());
  //   if(diff > 13) time += 26 - diff + 1;
  //   else time += diff + 1;
  //   pointer = char.charCodeAt();
  // }
  // return time;
}

console.log(minTimeToType("zjpc"));