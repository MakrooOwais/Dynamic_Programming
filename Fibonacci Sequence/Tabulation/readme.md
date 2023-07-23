# Fibonacci Numbers with Tabulation - Optimized Approach

The `fib` function is an efficient Python implementation of the Fibonacci number calculation using tabulation. Tabulation is a dynamic programming technique that involves filling up a table (in this case, a list) with the results of subproblems to build up the final solution. This approach significantly reduces the time complexity of the Fibonacci calculation, making it very efficient for larger inputs.

## Function Description

The `fib` function now uses a tabulation-based approach to calculate the nth Fibonacci number.

## Tabulation Process

1. The function initializes a list called `result` with length `n + 1`, where each element is initialized to 0.

2. The function sets `result[1]` to 1 because the first Fibonacci number is 1.

3. The function then iteratively fills the `result` list, starting from the second element up to the desired `n`.

4. For each `x` in the range from 1 to `n`, the function checks if `x + 1` and `x + 2` are within the valid range (i.e., less than or equal to `n`). If so, the function adds the value of `result[x]` to `result[x + 1]` and `result[x + 2]`, respectively. This step efficiently calculates the Fibonacci numbers in an iterative manner.

5. After completing the iteration, the function returns the value of `result[n]`, which represents the nth Fibonacci number.

## Usage of Tabulation

By using tabulation, the `fib` function avoids the overhead of recursive function calls and memoization. Instead, it fills the `result` list iteratively, leading to a highly efficient solution for calculating Fibonacci numbers.

## Usage

To use the `fib` function with tabulation, provide the input `n`. For example:

```python
inputs = [2, 6, 7, 8, 50]

for input in inputs:
    result = fib(input)
    print(f"Fib({input}) = {result}")
```

## Performance

The tabulation-based `fib` function provides a highly efficient solution for calculating Fibonacci numbers. With its linear time complexity of O(n), it can handle even very large values of `n` quickly and effectively.

---

The `fib` function offers an efficient and optimized solution for calculating Fibonacci numbers using tabulation. By leveraging this dynamic programming technique, the function fills the result list iteratively, allowing for rapid computation of Fibonacci numbers, even for larger values of `n`.
