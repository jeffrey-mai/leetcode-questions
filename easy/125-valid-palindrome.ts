// 

function isPalindrome(s: string): boolean {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  for(let i = 0; i < str.length / 2; i++){
    if(str[i] !== str[str.length-i-1]) return false;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

export default isPalindrome;