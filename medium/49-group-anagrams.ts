// inputs: strs (string[])
// group anagrams and return it in any order

function groupAnagrams(strs: string[]): string[][] {
  // let map: any = {}
  // for(let str of strs){
  //   let s = str.split('').sort().join('')
  //   if(!map[s]) map[s] = []
  //   map[s].push(str)
  // }
  // return Object.values(map)

  let map = new Map();
  for(let str of strs){
    let temp = str.split('').sort().join();
    map.set(temp, [...(map.get(temp) || []), str]);
  };
  return [...map.values()];
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

export default groupAnagrams;