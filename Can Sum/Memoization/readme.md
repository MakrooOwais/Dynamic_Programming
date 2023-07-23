# Can Sum with Memoization - Optimized Approach

The `canSum` function is an improved Python implementation to determine whether it is possible to generate the target sum using numbers from a given list. This version of the function utilizes memoization to optimize the recursive approach and avoid redundant calculations.

## Function Description

The `canSum` function now takes an additional parameter:

1. `memo`: A dictionary that serves as a memoization table to store previously computed results.

## Memoization Process

1. Before making any recursive calls to the `canSum` function, the function creates a `key` tuple using the current `targetSum` and the list of `numbers` converted to a comma-separated string.

2. The function then checks if the `key` tuple is present in the `memo` dictionary.

3. If the `key` is found in the `memo` dictionary, it means that the result for the current combination of `targetSum` and `numbers` has already been computed. In this case, the function immediately returns the result from the `memo` dictionary, avoiding redundant calculations.

4. If the `key` is not found in the `memo` dictionary, the function proceeds with the usual recursive logic for checking whether the target sum can be achieved.

5. After computing the result for the current combination of `targetSum` and `numbers`, the result is stored in the `memo` dictionary with the `key` as the key.

## Usage of Memoization

By using memoization, the `canSum` function avoids redundant calculations and greatly improves the performance of the target sum problem. It efficiently caches intermediate results, ensuring that each subproblem is solved only once.

## Usage

To use the `canSum` function with memoization, provide the target sum `targetSum`, the list of numbers `numbers`, and an empty dictionary for `memo`. For example:

```python
inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 14])]

for input in inputs:
    result = canSum(*input)
    print(f"canSum{input} = {result}")
```

## Performance

The memoized version of the `canSum` function offers an efficient solution for checking whether a target sum can be achieved using numbers from a given list. With the help of memoization, the function caches intermediate results and avoids redundant calculations, making it well-suited for larger inputs.

---

By utilizing memoization, the `canSum` function provides an efficient and optimized solution for checking whether a target sum can be achieved using numbers from a given list. The use of memoization helps reduce redundant calculations and greatly improves the performance, making it suitable for larger inputs.
