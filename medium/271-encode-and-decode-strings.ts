// 

// function encodeAndDecode(strings: string[]): string {
//   let encodedString = "%5B";
//   for(const str of strings){
//     encodedString += encodeURIComponent(str) + "%2C";
//   }
//   encodedString += "%5D";
//   return decodeURIComponent(encodedString);
// }

// console.log(encodeAndDecode(["we","say",":","yes"]));

function encode(strs: string[]): string {
  return strs.map((str) => `${str.length}#${str}`).join('');
}

function decode(str: string): string[] {
  const decodedWords: string[] = []
  let i = 0;
  while (i < str.length) {
    let j: number = i;
    // console.log(j);
    while (str[j] !== '#') j++;
    const len: number = parseInt(str.slice(i, j));
    // console.log(len);
    decodedWords.push(str.slice(j + 1, j + 1 + len));
    i = j + 1 + len;
    // console.log(i);
  }
  return decodedWords;
}

console.log(encode(["we","say",":","yes"]));
console.log(decode(encode(["we","say",":","yes"])));

export {encode, decode};