from time import time


def howSum(targetSum: int, numbers: list[int]) -> list[int | None] | None:
    if targetSum == 0: return []
    if targetSum < 0: return None
    
    for number in numbers:
        remainder = targetSum - number
        remainderResult = howSum(remainder, numbers)
        if type(remainderResult) == list:
            return [*remainderResult, number]

    return None


inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 14])]

for input in inputs:
    t1 = time()
    result = howSum(*input)
    t2 = time()

    print(f"howSum{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms")
