# The bestSum Problem

Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

The function should return an containing the smallest combination of elements of numbers that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return None.

You may use an element of the array as many times as needed.

You may assume that all numbers are non-negative

If there are multiple combinations possible, you may return any one of them.

```text
bestSum(0, [...]) = []
```

Given `targetSum` and `numbers`, calculate `bestSum(targetSum, numbers)`.

## Examples

### Example 1

```text
Input: targetSum = 7, numbers = [2, 3]
Output: [2, 3, 3]
```

### Example 2

```text
Input: targetSum = 7, numbers = [2, 4]
Output: None
```

### Example 3

```text
Input: targetSum = 7, numbers = [5, 3, 4, 7]
Output: [7]
```

### Example 4

```text
Input: targetSum = 8, numbers = [2, 3, 5]
Output: [5, 3]
```

### Example 5

```text
Input: targetSum = 300, numbers = [7, 14]
Output: None
```
