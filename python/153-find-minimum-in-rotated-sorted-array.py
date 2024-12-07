from typing import List


def findMin(nums: List[int]) -> int:
    # l, r = 0, len(nums) - 1
    # while l < r:
    #     m = (r + l) // 2
    #     if nums[m] > nums[r]: l = m + 1
    #     else: r = m
    # return nums[l]

    low, high = 0, len(nums) - 1
    while low <= high:
        mid = (high + low) // 2
        if nums[mid] > nums[high]:
            low = mid + 1
        else:
            high = mid - 1
    return nums[low]


print(findMin([3, 4, 5, 1, 2]))
print(findMin([4, 5, 6, 7, 0, 1, 2]))
print(findMin([11, 13, 15, 17]))
