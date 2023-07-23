# Can Sum with Tabulation - Optimized Approach

The `canSum` function is an efficient Python implementation to determine whether it is possible to generate the target sum using numbers from a given list. This version of the function uses a tabulation-based approach to avoid recursive calls and utilizes a table (a list) to store the results of subproblems, making it highly efficient for larger target sums and numbers.

## Function Description

The `canSum` function now uses a tabulation-based approach to determine whether the target sum can be achieved.

## Tabulation Process

1. The function initializes a list called `result` of size `(targetSum + 1)`, where each element is initialized to `False`.

2. The function sets `result[0]` to `True` because it is always possible to achieve the target sum of 0 using no numbers.

3. The function then iteratively fills the `result` list, starting from the first element up to the `targetSum`.

4. For each index `i` in the `result` list, if `result[i]` is `True`, it means that the current `i` can be achieved using the numbers from the given list. In this case, the function checks each number in the `numbers` list and updates the `result` list at the index `i + num` to `True`, indicating that the new sum `i + num` can be achieved.

5. The function continues filling the `result` list until reaching the `targetSum`, where the final result is stored.

6. The function finally returns the value stored in `result[targetSum]`, which represents whether the target sum can be achieved using the numbers from the given list.

## Usage of Tabulation

By using tabulation, the `canSum` function avoids recursive calls and memoization. Instead, it fills the `result` list iteratively, leading to a highly efficient solution for checking whether the target sum can be achieved.

## Usage

To use the `canSum` function with tabulation, provide the target sum `targetSum` and the list of numbers `numbers`. For example:

```python
inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 14])]

for input in inputs:
    result = canSum(*input)
    print(f"canSum{input} = {result}")
```

## Performance

The tabulation-based `canSum` function provides a highly efficient solution for checking whether a target sum can be achieved using numbers from a given list. With its linear time complexity of O(targetSum * numbers), it can handle even very large target sums and numbers quickly and effectively.

---

The `canSum` function offers an efficient and optimized solution for checking whether a target sum can be achieved using numbers from a given list using tabulation. By leveraging this dynamic programming technique, the function fills the result list iteratively, allowing for rapid computation even for larger target sums and numbers.
