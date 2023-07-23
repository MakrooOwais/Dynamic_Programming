# How Sum with Tabulation - Optimized Approach

The `howSum` function is an efficient Python implementation to find a combination of numbers from a given list that sums up to a target sum. This version of the function uses a tabulation-based approach to avoid recursive calls and utilizes a list to store the results of subproblems, making it highly efficient for larger target sums and numbers.

## Function Description

The `howSum` function now uses a tabulation-based approach to find a combination of numbers that sums up to the target sum.

## Tabulation Process

1. The function initializes a list called `result` of size `(targetSum + 1)`, where each element is initialized to `None`.

2. The function sets `result[0]` to an empty list `[]` because it is always possible to achieve the target sum of 0 using no numbers.

3. The function then iteratively fills the `result` list, starting from the first element up to the `targetSum`.

4. For each index `i` in the `result` list, if `result[i]` is not `None`, it means that the current `i` can be achieved using the numbers from the given list. In this case, the function checks each number in the `numbers` list and updates the `result` list at the index `i + num` to contain a new list that includes the current number and the numbers in `result[i]`.

5. The function continues filling the `result` list until reaching the `targetSum`, where the final result is stored.

6. The function finally returns the list of integers stored in `result[targetSum]`, which represents one valid combination of numbers that sums up to the target sum.

## Usage of Tabulation

By using tabulation, the `howSum` function avoids recursive calls and memoization. Instead, it fills the `result` list iteratively, leading to a highly efficient solution for finding a combination of numbers that sums up to the target sum.

## Usage

To use the `howSum` function with tabulation, provide the target sum `targetSum` and the list of numbers `numbers`. For example:

```python
inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 14])]

for input in inputs:
    result = howSum(*input)
    print(f"howSum{input} = {result}")
```

## Performance

The tabulation-based `howSum` function provides a highly efficient solution for finding a combination of numbers that sums up to the target sum. With its linear time complexity of O(targetSum \* numbers), it can handle even very large target sums and numbers quickly and effectively.

---

The `howSum` function offers an efficient and optimized solution for finding a combination of numbers that sums up to a target sum using tabulation. By leveraging this dynamic programming technique, the function fills the result list iteratively, allowing for rapid computation even for larger target sums and numbers.
