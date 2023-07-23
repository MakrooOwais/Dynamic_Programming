# Fibonacci Numbers - Recursive Approach

The `fib` function is a Python implementation of the Fibonacci number calculation using a recursive approach. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.

## Function Description

The `fib` function takes an integer `n` as input and returns the nth Fibonacci number. The function uses recursion to compute the Fibonacci number for the given input.

## Recursive Algorithm

The recursive algorithm for calculating the nth Fibonacci number is as follows:

1. Base case: If `n` is 1 or 2, the function returns 1 since the first two Fibonacci numbers are both 1.

2. For any value of `n` greater than 2, the function recursively calls itself with `n - 1` and `n - 2` as inputs. It then adds the results of these recursive calls to obtain the nth Fibonacci number.

3. The recursive calls continue until the base case is reached, at which point the function starts returning the computed Fibonacci numbers back through the chain of recursive calls.

## Usage

To use the `fib` function, provide an integer input `n` to calculate the nth Fibonacci number. For example:

```python
inputs = [2, 6, 7, 8, 50]

for input in inputs:
    result = fib(input)
    print(f"Fib({input}) = {result}")
```

## Performance

The recursive approach to calculating Fibonacci numbers has an exponential time complexity of O(2^n). This means that the computation time grows rapidly with increasing `n`, making it highly inefficient for larger inputs.

For small values of `n`, the recursive solution works fine. However, as `n` becomes larger, the function's execution time becomes impractical.

## Note

For more efficient computation of Fibonacci numbers, consider using iterative methods like memoization or tabulation. Memoization involves caching intermediate results to avoid redundant calculations, while tabulation builds the solution iteratively by filling up a table. These techniques greatly improve the performance of Fibonacci number calculations for larger values of `n`.

---

The `fib` function provides a recursive solution to calculate Fibonacci numbers. While it is suitable for small values of `n`, its exponential time complexity makes it inefficient for larger values. Consider using memoization or tabulation for more efficient Fibonacci number calculations when dealing with bigger inputs.
