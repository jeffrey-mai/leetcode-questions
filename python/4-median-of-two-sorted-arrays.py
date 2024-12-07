from typing import List
from math import ceil

def findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:
    # sortedList = sorted(nums1 + nums2)
    # n = len(sortedList)
    # if n%2 == 0:
    #     median = (sortedList[n//2-1] + sortedList[n//2])/2
    # else:
    #     median = sortedList[ceil(n/2)-1]
    # return median

    

print(findMedianSortedArrays([1,3], [2]))
print(findMedianSortedArrays([1,2], [3,4]))