from time import time


def bestSum(targetSum: int, numbers: list[int]) -> list[int | None] | None:
    if targetSum == 0: return []
    if targetSum < 0: return None
    
    shortestCombination = None

    for number in numbers:
        remainder = targetSum - number
        remainderResult = bestSum(remainder, numbers)
        if type(remainderResult) == list:
            combination =  [*remainderResult, number]

            if (shortestCombination == None) or (len(combination) < len(shortestCombination)):
                shortestCombination = combination

    return shortestCombination


inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 15])]

for input in inputs:
    t1 = time()
    result = bestSum(*input)
    t2 = time()

    print(f"bestSum{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms")
