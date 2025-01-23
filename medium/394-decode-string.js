var decodeString = function(s) {
  const stack = [];
  for(const char of s){
    if(char !== "]") stack.push(char);
    else{
      let str = "";
      while(stack[stack.length-1] !== "[") str = stack.pop() + str;
      stack.pop();

      let num = "";
      while(Number(stack[stack.length-1]) >= 0) num = stack.pop() + num;
      stack.push(str.repeat(Number(num)));
    }
  }
  return stack.join("");
};

console.log(decodeString("3[a2[c]]"));