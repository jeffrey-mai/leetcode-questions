from typing import List


def searchMatrix(matrix: List[List[int]], target: int) -> bool:
    rows, cols = len(matrix), len(matrix[0])
    lo, hi = 0, rows * cols - 1
    while lo <= hi:
        mid = (hi + lo) // 2
        mid_row, mid_col = divmod(mid, cols)
        if matrix[mid_row][mid_col] < target:
            lo = mid + 1
        elif matrix[mid_row][mid_col] > target:
            hi = mid - 1
        else:
            return True
    return False


print(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))
