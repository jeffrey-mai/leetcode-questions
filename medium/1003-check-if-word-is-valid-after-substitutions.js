var isValid = function(s) {
  const stack = [];
  for(const char of s){
    if(char === "c"){
      if(stack[stack.length-2] === "a" && stack[stack.length-1] === "b"){
        stack.pop();
        stack.pop();
      }
      else return false;
    }
    else stack.push(char);
  }
  return !stack.length;
};

console.log(isValid("bac"));