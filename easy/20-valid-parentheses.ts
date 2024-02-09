// 

function isValid(s: string): boolean {
  if(s.length%2 !== 0) return false
  const stack = [];
  const pairs: {[key: string]: string} = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for(let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if(pairs[currentChar]) stack.push(currentChar);
    else {
      const lastOpenBracket: string | undefined = stack.pop();
      if(!lastOpenBracket || pairs[lastOpenBracket] !== currentChar) return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("()({"));

export default isValid;