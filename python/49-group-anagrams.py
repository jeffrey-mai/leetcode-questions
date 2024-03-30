from typing import List

class Solution:
  def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    ans, cache = [], {}
    for i in range(len(strs)):
      sortedStr = "".join(sorted(strs[i]))
      if sortedStr in cache:
          ans[cache[sortedStr]].append(strs[i])
      else:
          cache[sortedStr] = len(ans)
          ans.append([strs[i]])
    return ans

print(Solution().groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))