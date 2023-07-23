from time import time


def canSum(targetSum: int, numbers: list[int]) -> bool:
    result = [False for _ in range(targetSum + 1)]

    result[0] = True

    for i in range(0, targetSum + 1):
        if result[i]:
            for num in numbers:
                if i + num < targetSum + 1:
                    result[i + num] = True

    return result[targetSum]


inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 14])]

for input in inputs:
    t1 = time()
    result = canSum(*input)
    t2 = time()

    print(f"canSum{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms")
