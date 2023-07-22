from time import time

# def timer_func(func):
#     def wrap_func(*args, **kwargs):
#         t1 = time()
#         result = func(*args, **kwargs)
#         t2 = time()

#         print(f"Function {func.__name__!r} executed in {(t2-t1):.4f}s")
#         return result

#     return wrap_func

# @timer_func
def fib(n: int) -> int:
    if n <= 2: return 1
    return fib(n-1) + fib(n-2)


inputs = [2, 6, 7, 8, 50]

for input in inputs:
    t1 = time()
    result = fib(input)
    t2 = time()

    print(f'Fib({input}) = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms')
