// input: x (32 bit int)
  // can't store 64 bit int
// returns x with its digits reversed
// if digit is not within [-2^31, 2^31 - 1], return 0

function reverse(x: number): number {
  // let num: string = x.toString(), result: number | string = "";
  // for(let i = num.length - 1; i >= 0; i--){
  //   if(num[i] === "-") result = "-" + result;
  //   else result += num[i];
  // };
  // result = Number(result);
  // if(result < -(2**31) || result > 2**31 - 1) return 0;
  // return result;

  const maxInt = Math.pow(2, 31) - 1;
  const minInt = -maxInt;
  const isNegative = x < 0;
  let reversed = 0;

  if (isNegative) x = -x;
  while (x > 0) {
      const remainder = x % 10;
      reversed = reversed * 10 + remainder;
      x = Math.floor(x / 10);
  };
  if (reversed > maxInt || reversed < minInt) return 0;
  return isNegative ? -reversed : reversed;
};

console.log(reverse(-123));

export default reverse;