from typing import List


def trap(height: List[int]) -> int:
    # left, right, ans = 1, len(height) - 2, 0
    # maxLeft, maxRight = height[0], height[right + 1]
    # while left <= right:
    #     if maxLeft <= maxRight:
    #         if height[left] <= maxLeft:
    #             ans += min(maxLeft, maxRight) - height[left]
    #             left += 1
    #         else:
    #             maxLeft = height[left]
    #     else:
    #         if height[right] <= maxRight:
    #             ans += min(maxLeft, maxRight) - height[right]
    #             right -= 1
    #         else:
    #             maxRight = height[right]
    # return ans

    maxLeft, maxRight, left, right, ans = height[0], height[-1], 0, len(height) - 1, 0
    while left <= right:
        # print(maxLeft, maxRight, left, right)
        if maxLeft >= height[right]:
            if maxRight > height[right]:
                ans += maxRight - height[right]
            right -= 1
            maxRight = max(maxRight, height[right])
        elif maxRight >= height[left]:
            if maxLeft > height[left]:
                ans += maxLeft - height[left]
            left += 1
            maxLeft = max(maxLeft, height[left])
        # print(ans)
    return ans


print(trap([4, 2, 0, 3, 2, 5]))
print(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
print(trap([4, 2, 3]))
