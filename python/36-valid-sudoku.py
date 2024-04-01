from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # for i in range(9):
        #     cache = {"row": [], "col": [], "box": []}
        #     for j in range(9):
        #         # row
        #         if board[i][j] != "." and board[i][j] in cache["row"]:
        #             return False
        #         cache["row"].append(board[i][j])

        #         # col
        #         if board[j][i] != "." and board[j][i] in cache["col"]:
        #             return False
        #         cache["col"].append(board[j][i])

        #         # box
        #         if (
        #             board[int(j / 3)][j % 3] != "."
        #             and board[int(j / 3)][j % 3] in cache["box"]
        #         ):
        #             return False
        #         cache["box"].append(board[int(j / 3)][j % 3])
        #         print(int(i / 3), j % 3)
        #     print(cache["box"], i)
        # return True

        res = []
        for i in range(9):
            for j in range(9):
                element = board[i][j]
                if element != '.':
                    res += [(i, element), (element, j), (i // 3, j // 3, element)]
        return len(res) == len(set(res))


print(
    Solution().isValidSudoku(
        [
            [".", ".", ".", ".", "5", ".", ".", "1", "."],
            [".", "4", ".", "3", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", "3", ".", ".", "1"],
            ["8", ".", ".", ".", ".", ".", ".", "2", "."],
            [".", ".", "2", ".", "7", ".", ".", ".", "."],
            [".", "1", "5", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", "2", ".", ".", "."],
            [".", "2", ".", "9", ".", ".", ".", ".", "."],
            [".", ".", "4", ".", ".", ".", ".", ".", "."],
        ]
    )
)
