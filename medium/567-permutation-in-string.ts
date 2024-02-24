
const compare = (arr1: number[], arr2: number[]): boolean => {
  for(let i = 0; i < 26; i++){
    if(arr1[i] !== arr2[i]) return false
  }
  return true;
}

const getCharCode = (char: string): number => {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

function checkInclusion(s1: string, s2: string): boolean {
  const arr1 = new Array(26).fill(0), arr2 = new Array(26).fill(0), len = s1.length;
  for(let i = 0; i < len; i++){
    const index = getCharCode(s1[i]);
    arr1[index]++;
  }

  for(let i = 0; i < s2.length; i++){
    if(i >= len){
      if(compare(arr1, arr2)) return true;
      arr2[getCharCode(s2[i-len])]--; 
    }
    arr2[getCharCode(s2[i])]++; 
  }
  return compare(arr1, arr2);
};

export default checkInclusion;