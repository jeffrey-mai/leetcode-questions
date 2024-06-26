from typing import List

def findMin(nums: List[int]) -> int:
    l, r = 0, len(nums) - 1
    while l < r:
        m = (r + l) // 2
        if nums[m] > nums[r]: l = m + 1
        else: r = m 
    return nums[l]


print(findMin([5, 1, 2, 3, 4]))
