var uniqueOccurrences = function(arr) {
  const hashmap = new Map(), cache = new Set();
  for(const ele of arr){
    hashmap.set(ele, hashmap.get(ele) + 1 || 1);
  }
  console.log(hashmap);
  
  for(const val of hashmap.values()){
    if(!cache.has(val)) cache.add(val);
    else return false;
  }
  return true;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));