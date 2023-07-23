from time import time


def canSum(targetSum: int, numbers: list[int]) -> bool:
    if targetSum < 0:
        return False
    if targetSum == 0:
        return True

    for number in numbers:
        remainder = targetSum - number
        if canSum(remainder, numbers) == True:
            return True

    return False


inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 14])]

for input in inputs:
    t1 = time()
    result = canSum(*input)
    t2 = time()

    print(f"canSum{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms")
