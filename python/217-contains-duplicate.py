from typing import List

class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    cache = set()
    for num in nums:
      if num in cache: return True
      cache.add(num)
    return False

print(Solution().containsDuplicate([1,2,3,1]))