from time import time

def fib(n: int, memo: dict = {}) -> int:
    if n in memo.keys(): return memo.get(n)
    if n <= 2: return 1
    memo[n] = fib(n-1) + fib(n-2)
    return memo.get(n)

inputs = [2, 6, 7, 8, 50]

for input in inputs:
    t1 = time()
    result = fib(input)
    t2 = time()

    print(f'Fib({input}) = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms')