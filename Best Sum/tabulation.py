from time import time


def bestSum(targetSum: int, numbers: list[int]) -> list[int | None] | None:
    result = [None for _ in range(targetSum + 1)]
    result[0] = []

    for i in range(targetSum + 1):
        if result[i] != None:
            for number in numbers:
                if i + number <= targetSum:
                    if result[i + number] == None:
                        result[i + number] = []
                    if result[i + number] == [] or len(result[i + number]) > len(
                        [*result[i], number]
                    ):
                        result[i + number] = [*result[i], number]

    return result[targetSum]


inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 14])]

for input in inputs:
    t1 = time()
    result = bestSum(*input)
    t2 = time()

    print(f"bestSum{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms")
