from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # ans, temp = [1], 1
        # for num in reversed(nums[1:]):
        #     temp *= num
        #     ans.insert(0, temp)
        # temp = 1
        # for i in range(len(nums) - 1):
        #     temp *= nums[i]
        #     ans[i + 1] *= temp
        # return ans

        new_array = []
        prefix = 1
        for num in nums:
            new_array.append(prefix)
            prefix = prefix * num
        postfix = 1
        for i in range(len(nums) - 1, -1, -1):
            new_array[i] = new_array[i] * postfix
            postfix = postfix * nums[i]
        return new_array


print(Solution().productExceptSelf([1, 2, 3, 4]))
