# Grid Traveller with Memoization - Optimized Approach

The `gridTraveller` function is an improved Python implementation of the grid traveler problem using memoization. Memoization is a dynamic programming technique that involves caching the results of expensive function calls and reusing them when the same inputs occur again. By utilizing memoization, the function significantly reduces the time complexity of the grid traveler problem, making it more efficient for larger grid sizes.

## Function Description

The `gridTraveller` function now takes an additional parameter:

1. `memo`: A dictionary that serves as a memoization table to store previously computed results.

## Memoization Process

1. Before making any recursive calls to the `gridTraveller` function, the function first checks if the current combination of `m` and `n` is present in the `memo` dictionary.

2. If the combination of `m` and `n` is found in the `memo` dictionary, it means that the number of ways to travel through the grid for this combination has already been computed. In this case, the function immediately returns the result from the `memo` dictionary, avoiding redundant calculations.

3. If the combination of `m` and `n` is not found in the `memo` dictionary, the function proceeds with the usual recursive logic for finding the number of ways to travel through the grid.

4. After computing the number of ways for the current combination of `m` and `n`, the result is stored in the `memo` dictionary with `(m, n)` as the key.

## Usage of Memoization

By using memoization, the `gridTraveller` function avoids redundant calculations and greatly improves the performance of the grid traveler problem. It efficiently caches intermediate results, ensuring that each subproblem is solved only once.

## Usage

To use the `gridTraveller` function with memoization, provide the number of rows `m`, the number of columns `n`, and an empty dictionary for `memo`. For example:

```python
inputs = [(1, 1), (2, 3), (3, 2), (3, 3), (18, 18)]

for input in inputs:
    result = gridTraveller(*input)
    print(f"gridTraveller{input} = {result}")
```

## Performance

The memoized version of the `gridTraveller` function offers an efficient solution to finding the number of ways to travel through a 2D grid. With the help of memoization, the function caches intermediate results and avoids redundant calculations, making it well-suited for larger grid sizes.

---

By utilizing memoization, the `gridTraveller` function provides an efficient and optimized solution for finding the number of ways to travel through a 2D grid. The use of memoization helps reduce redundant calculations and greatly improves the performance, making it suitable for larger grid sizes.
