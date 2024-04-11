from typing import List


def search(nums: List[int], target: int) -> int:
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = (high - low) // 2 + low
        if nums[mid] < target: low = mid + 1
        elif nums[mid] > target: high = mid - 1
        else: return mid
    return -1


print(search([-1, 0, 3, 5, 9, 12], 9))