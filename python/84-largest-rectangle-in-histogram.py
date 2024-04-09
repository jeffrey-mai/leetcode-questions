from typing import List


def largestRectangleArea(heights: List[int]) -> int:
    stack, ans = [], 0
    heights.append(0)
    for i, h in enumerate(heights):
        start = i
        while stack and stack[-1][1] > h:
            index, height = stack.pop()
            ans = max(ans, (i-index)*height)
            start = index
        stack.append((start, h))
    return ans


print(largestRectangleArea([2, 4]))
