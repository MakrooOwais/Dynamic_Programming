# Fibonacci Numbers with Memoization - Optimized Approach

The `fib` function is an improved Python implementation of the Fibonacci number calculation using memoization. Memoization is a dynamic programming technique that involves caching the results of expensive function calls and reusing them when the same inputs occur again. This technique significantly reduces the time complexity of the Fibonacci calculation, making it more efficient for larger inputs.

## Function Description

The `fib` function now takes an additional parameter:

1. `memo`: A dictionary that serves as a memoization table to store previously computed Fibonacci numbers.

## Memoization Process

1. Before making any recursive calls to the `fib` function, the function first checks if the value of `n` is present in the `memo` dictionary.

2. If the value of `n` is found in the `memo` dictionary, it means that the Fibonacci number for that `n` has already been computed. In this case, the function immediately returns the result from the `memo` dictionary, avoiding redundant calculations.

3. If the value of `n` is not found in the `memo` dictionary, the function proceeds with the usual recursive logic for calculating the Fibonacci number.

4. After computing the Fibonacci number for `n`, the result is stored in the `memo` dictionary with `n` as the key.

## Usage of Memoization

By using memoization, the `fib` function significantly reduces the time complexity of calculating Fibonacci numbers. It avoids recalculating Fibonacci numbers for the same input values and improves overall performance, especially for larger values of `n`.

## Usage

To use the `fib` function with memoization, provide the input `n` and an empty dictionary for `memo`. For example:

```python
inputs = [2, 6, 7, 8, 50]

for input in inputs:
    result = fib(input)
    print(f"Fib({input}) = {result}")
```

## Performance

The memoized version of the `fib` function offers an efficient solution for calculating Fibonacci numbers. With the help of memoization, the function caches intermediate results and avoids redundant calculations, making it well-suited for larger values of `n`.

---

By utilizing memoization, the `fib` function provides an efficient and optimized solution for calculating Fibonacci numbers. The use of memoization helps reduce redundant calculations and greatly improves the performance, making it suitable for larger inputs.
