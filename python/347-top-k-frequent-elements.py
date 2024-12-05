from typing import List

class Solution:
    def frequentElements(self, nums: List[int], k: int) -> List[int]:
        cache = {}
        for num in nums:
            if num in cache:
                cache[num] += 1
            else:
                cache[num] = 1
        cache = dict(sorted(cache.items(), key=lambda x: x[1], reverse=True))
        return list(cache.keys())[:k]         

print(Solution().frequentElements([3, 0, 1, 0], 1))
