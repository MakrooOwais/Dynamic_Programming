# bestSum with Memoization

The `bestSum` function is an improved version of the previous Python implementation, which uses memoization to optimize the solution. This technique significantly reduces the time complexity of the algorithm by avoiding redundant calculations and storing previously computed results.

## Memoization - Overview

Memoization is a dynamic programming technique that involves caching the results of expensive function calls and reusing them when the same inputs occur again. In this implementation, a `memo` dictionary is used to store the results of intermediate function calls based on the `targetSum` and the `numbers` array.

## Function Description

The `bestSum` function now takes an additional parameter:

`memo`: A dictionary that serves as a memoization table to store previously computed results.

## Memoization Process

1. Before making any recursive calls to the `bestSum` function, a `key` is generated based on the current `targetSum` and the `numbers` array. The key is a tuple that combines these two values.

2. The function checks if the `key` is already present in the `memo` dictionary. If so, it retrieves the result associated with that key and returns it immediately. This avoids unnecessary recalculations for the same combination of inputs.

3. If the `key` is not found in the `memo` dictionary, the function proceeds with the usual logic for calculating the best combination to achieve the `targetSum`.

4. After finding the `shortestCombination`, the result is stored in the `memo` dictionary with the corresponding `key`.

## Usage of Memoization

By using memoization, the `bestSum` function significantly improves its performance for larger inputs. The memoized results help avoid redundant recursive calls and ensure that each subproblem is solved only once.

## Usage

To use the `bestSum` function with memoization, provide the `targetSum` and the `numbers` array as inputs, as well as an empty dictionary for `memo`. For example:

```python
inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 14])]

for input in inputs:
    result = bestSum(*input)
    print(f"bestSum{input} = {result}")
```

## Performance

The memoized version of the `bestSum` function significantly reduces the time complexity for larger inputs. With the help of memoization, the function efficiently stores and reuses intermediate results, leading to faster computation times.

By utilizing memoization, the `bestSum` function offers a more efficient solution to finding the smallest set of numbers from the `numbers` array that adds up to the `targetSum`. The memoization technique helps reduce redundant calculations, leading to improved performance, especially for larger inputs.
