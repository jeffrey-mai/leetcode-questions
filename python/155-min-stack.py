class MinStack:
    def __init__(self):
        self.cache = []
        self.minCache = []

    def push(self, val: int) -> None:
        self.cache.append(val)
        val = min(val, self.minCache[-1] if self.minCache else val)
        self.minCache.append(val)

    def pop(self) -> None:
        self.minCache.pop()
        return self.cache.pop()

    def top(self) -> int:
        return self.cache[-1]

    def getMin(self) -> int:
        return self.minCache[-1]