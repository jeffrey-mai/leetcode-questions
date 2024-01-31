// 

interface phoneMap {
  [key: string]: string;
  '2': string,
  '3': string,
  '4': string,
  '5': string,
  '6': string,
  '7': string,
  '8': string,
  '9': string
}

function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  const phoneMap: phoneMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  let combinations = [''];

  for (const digit of digits) {
    const newCombinations = [];
    for (const combination of combinations) {
      for (const letter of phoneMap[digit]) {
        newCombinations.push(combination + letter);
      }
    }
    combinations = newCombinations;
  }
  return combinations;
};

export default letterCombinations;