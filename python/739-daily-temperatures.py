from typing import List


def dailyTemperatures(temperatures: List[int]) -> List[int]:
    stack = []
    ans = [0] * len(temperatures)
    # for i in range(len(temperatures)):
    #     while stack and temperatures[stack[-1]] < temperatures[i]:
    #         ans[stack[-1]] = i - stack[-1]
    #         stack.pop()
    #     stack.append(i)

    for i, temperature in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < temperature:
            index = stack.pop()
            ans[index] = i - index
        stack.append(i)
    return ans


print(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
