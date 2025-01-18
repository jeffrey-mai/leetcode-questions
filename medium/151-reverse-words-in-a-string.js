const reverseWords = (s) => {
  return s.split(" ").filter((ele) => ele !== "").reverse().join(" ");
};

console.log(reverseWords("a good   example"));
console.log(reverseWords("  hello world  "));