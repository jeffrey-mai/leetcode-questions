var isSubsequence = function(s, t) {
  let left = 0;
  if(s === "") return true;
  for(let right = 0; right < t.length; right++){
    if(s[left] === t[right]) left++;
  }
  return left === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));