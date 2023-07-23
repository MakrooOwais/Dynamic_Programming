from time import time


def gridTraveller(m: int, n: int, memo: dict = {}) -> int:
    if (m, n) in memo.keys():
        return memo.get((m, n))
    if m == 1 and n == 1:
        return 1
    if m == 0 or n == 0:
        return 0

    memo[(m, n)] = gridTraveller(m - 1, n) + gridTraveller(m, n - 1)
    return memo[(m, n)]


inputs = [(1, 1), (2, 3), (3, 2), (3, 3), (18, 18)]

for input in inputs:
    t1 = time()
    result = gridTraveller(*input)
    t2 = time()

    print(f"gridTraveller{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms")
