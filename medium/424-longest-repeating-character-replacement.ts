function characterReplacement(s: string, k: number): number {
  const hashMap: { [key: string]: number } = {};
  let longest: number = 0, maxFreq: number = 0, leftPointer: number = 0;

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    hashMap[s[rightPointer]] = (hashMap[s[rightPointer]] || 0) + 1;
    maxFreq = Math.max(maxFreq, hashMap[s[rightPointer]]);

    if (maxFreq + k < rightPointer - leftPointer + 1) {
      hashMap[s[leftPointer]]--;
      leftPointer++;
    }
    longest = Math.max(longest, rightPointer - leftPointer + 1);
  }
  return longest;
};

console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("AABA", 0));

export default characterReplacement;