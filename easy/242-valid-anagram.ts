// inputs: s (str), t(str)
// if t is an anagram of s, return true; else false

function isAnagram(s: string, t: string): boolean {
  // if (s.length !== t.length) return false;
  // let first: Array<string | null> = s.split('');
  // const second = t.split('');

  // for (let i = 0; i < second.length; i++) {
  //   const element = second[i];
  //   let found = first.indexOf(element);
  //   console.log(found);
  //   if (found !== -1) first[found] = null;
  //   else return false;
  // }
  // return true;


  // s = s.split("").sort().join("");
  // t = t.split("").sort().join("");
  // console.log(t, s)
  // return s === t;


  if (s.length !== t.length) return false;
  const charMap = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    charMap[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    charMap[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    console.log(s.charCodeAt(i), 'a'.charCodeAt(0))
  }
  console.log(charMap);
  return charMap.every(count => count === 0);
};

console.log(isAnagram("cat", "atc"));

export default isAnagram;