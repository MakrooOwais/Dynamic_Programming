# How Sum with Memoization - Optimized Approach

The `howSum` function is an improved Python implementation to find a combination of numbers from a given list that sums up to a target sum. This version of the function utilizes memoization to optimize the recursive approach and avoid redundant calculations.

## Function Description

The `howSum` function now takes an additional parameter:

1. `memo`: A dictionary that serves as a memoization table to store previously computed results.

## Memoization Process

1. Before making any recursive calls to the `howSum` function, the function creates a `key` tuple using the current `targetSum` and the list of `numbers` converted to a comma-separated string.

2. The function then checks if the `key` tuple is present in the `memo` dictionary.

3. If the `key` is found in the `memo` dictionary, it means that the result for the current combination of `targetSum` and `numbers` has already been computed. In this case, the function immediately returns the result from the `memo` dictionary, avoiding redundant calculations.

4. If the `key` is not found in the `memo` dictionary, the function proceeds with the usual recursive logic for finding a combination of numbers that sums up to the target sum.

5. After finding the combination for the current combination of `targetSum` and `numbers`, the result is stored in the `memo` dictionary with the `key` as the key.

## Usage of Memoization

By using memoization, the `howSum` function avoids redundant calculations and greatly improves the performance of finding a combination that sums up to the target sum. It efficiently caches intermediate results, ensuring that each subproblem is solved only once.

## Usage

To use the `howSum` function with memoization, provide the target sum `targetSum`, the list of numbers `numbers`, and an empty dictionary for `memo`. For example:

```python
inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 14])]

for input in inputs:
    result = howSum(*input)
    print(f"howSum{input} = {result}")
```

## Performance

The memoized version of the `howSum` function offers an efficient solution for finding a combination of numbers that sums up to the target sum. With the help of memoization, the function caches intermediate results and avoids redundant calculations, making it well-suited for larger target sums and numbers.

---

By utilizing memoization, the `howSum` function provides an efficient and optimized solution for finding a combination of numbers that sums up to a target sum. The use of memoization helps reduce redundant calculations and greatly improves the performance, making it suitable for larger target sums and longer `numbers` lists.
