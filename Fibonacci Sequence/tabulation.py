from time import time

def fib(n: int) -> int:
    result = [0 for _ in range(n+1)]
    result[1] = 1

    for x in range(1, n+1):
        if x+1 <= n: result[x+1] += result[x]
        if x+2 <= n: result[x+2] += result[x]
    return result[n]

inputs = [2, 6, 7, 8, 50]

for input in inputs:
    t1 = time()
    result = fib(input)
    t2 = time()

    print(f'Fib({input}) = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms')