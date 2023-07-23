# How Sum - Recursive Approach

The `howSum` function is a Python implementation to find a combination of numbers from a given list that sums up to a target sum. The function uses a recursive approach to explore all possible combinations of numbers and return one valid combination if it exists.

## Function Description

The `howSum` function takes two parameters:

1. `targetSum`: An integer representing the target sum to be achieved.
2. `numbers`: A list of integers representing the available numbers that can be used to reach the target sum.

The function returns either a list of integers representing one valid combination of numbers that sums up to the target sum, or `None` if no valid combination exists.

## Recursive Algorithm

The recursive algorithm for finding a combination of numbers that sums up to the target sum is as follows:

1. Base cases:
   - If the `targetSum` becomes negative, it means the current combination of numbers leads to an invalid sum, so the function returns `None`.
   - If the `targetSum` becomes 0, it means the current combination of numbers achieves the target sum, so the function returns an empty list `[]`.

2. For any other value of `targetSum`, the function recursively calls itself for each number in the `numbers` list.

3. For each number in the `numbers` list, the function calculates the remainder by subtracting the number from the `targetSum`.

4. The function then recursively calls itself with the remainder as the new `targetSum` to explore if it's possible to achieve the remaining sum using the remaining numbers.

5. If any recursive call returns a valid combination (i.e., a non-`None` list), the function appends the current number to the combination and immediately returns the resulting list.

6. If none of the recursive calls return a valid combination, the function returns `None`, indicating that it's not possible to achieve the target sum using the given numbers.

7. The recursive calls continue until the base cases are reached, at which point the function starts returning the computed list of integers back through the chain of recursive calls.

## Usage

To use the `howSum` function, provide the target sum `targetSum` and the list of numbers `numbers` as inputs. For example:

```python
inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 14])]

for input in inputs:
    result = howSum(*input)
    print(f"howSum{input} = {result}")
```

## Performance

The recursive approach to finding a combination of numbers that sums up to the target sum has an exponential time complexity. As the target sum or the size of the `numbers` list increases, the number of recursive calls grows exponentially, making the function highly inefficient for larger inputs.

## Note

For more efficient solutions, consider using memoization or tabulation to optimize the process. Memoization involves caching intermediate results to avoid redundant calculations, while tabulation builds the solution iteratively by filling up a table. These techniques greatly improve the performance of the `howSum` function for larger inputs and help avoid unnecessary recursive calls.

---

The `howSum` function provides a recursive solution to find a combination of numbers that sums up to a target sum. While it works fine for small inputs, its exponential time complexity makes it inefficient for larger inputs. Consider using memoization or tabulation for more efficient solutions when dealing with larger target sums or longer `numbers` lists.
