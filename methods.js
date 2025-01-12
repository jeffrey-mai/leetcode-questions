let ans = "helLo".replace(/l/gi, (char) => char.toUpperCase());
ans = String.raw`D:\Visual Studio Codes\leetcode-questions`;
console.log(ans);

let x = [1,2,3,4,5,6];
console.log(x.toString());
console.log(x.join(' + '), x.join(''));
console.log(x.fill('a', 2, 4));
console.log(x.copyWithin(2, 4, 6));
console.log(x.splice(0, 2, "hi", "ho", "jo"));
console.log(x.splice(1, 3));
console.log(x.splice(0));
console.log(x);

let y = "1234";
console.log(Array.from(y));
console.log(Array.from(y, (ele) => Number(ele)));

console.log([1,2,3,4].reduce((prev, curr) => {return prev - curr}, 5));
