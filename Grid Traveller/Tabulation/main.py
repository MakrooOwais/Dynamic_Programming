from time import time


def gridTraveller(m: int, n: int) -> int:
    result = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
    result[1][1] = 1

    for x in range(1, m + 1):
        for y in range(1, n + 1):
            if x + 1 <= m:
                result[x + 1][y] += result[x][y]
            if y + 1 <= n:
                result[x][y + 1] += result[x][y]

    return result[m][n]


inputs = [(1, 1), (2, 3), (3, 2), (3, 3), (18, 18)]

for input in inputs:
    t1 = time()
    result = gridTraveller(*input)
    t2 = time()

    print(f"gridTraveller{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms")
