# The bestSum Problem (Brute Force)

The `bestSum` function is a Python implementation of a recursive algorithm to find the smallest set of numbers from an array (`numbers`) that adds up to a given target sum (`targetSum`). This problem falls under the category of dynamic programming and is often referred to as the "Best Sum" problem.

## Function Description

The `bestSum` function takes two parameters:

1. `targetSum`: An integer representing the target sum we want to achieve.
2. `numbers`: A list of integers representing the available numbers that can be used to achieve the target sum.

The function returns the smallest set of numbers from the `numbers` array that adds up to the `targetSum`. If no combination of numbers can achieve the target sum, the function returns `None`.

## Algorithm

The `bestSum` function employs a recursive approach to solve the problem. It iterates through each number in the numbers array and tries to find the best combination that leads to the target sum. The algorithm works as follows:

1. Base cases:

    - If the targetSum is 0, it means we have found a valid combination that adds up to the target sum. In this case, an empty list `[]` is returned.
    - If the targetSum becomes negative, it indicates that the current combination is not valid, so `None` is returned.

2. For each number in the `numbers` array, calculate the `remainder` by subtracting the number from the `targetSum`.

3. Recursively call the `bestSum` function with the `remainder` as the new target sum. This step helps to find the best combination for the remainder value.

4. If a valid combination is found (i.e., the return value of the recursive call is a list), create a new combination by adding the current number to the result of the recursive call.

5. Keep track of the `shortestCombination` found so far. If the new combination is shorter than the previously recorded shortest combination, update the `shortestCombination` with the new combination.

6. After processing all numbers in the `numbers` array, return the `shortestCombination`. This will be the smallest set of numbers that adds up to the `targetSum`.

## Usage

To use the `bestSum` function, provide the targetSum and the numbers array as inputs. For example:

```python
inputs = [(7, [2, 3]), (7, [2, 4]), (7, [5, 3, 4, 7]), (8, [2, 3, 5]), (300, [7, 15])]

for input in inputs:
    result = bestSum(*input)
    print(f"bestSum{input} = {result}")
```

## Performance

It is important to note that the bestSum function uses a recursive approach, which may lead to exponential time complexity for certain inputs. As the size of the numbers array or the targetSum increases, the execution time may become significant.

For larger inputs, it is recommended to optimize the function using memoization or a dynamic programming approach to avoid redundant calculations and improve overall performance.

In the provided code, the execution time is measured using the time module and printed in milliseconds (ms) for each input set.

By understanding the bestSum function's algorithm and usage, you can find the smallest set of numbers from the numbers array that adds up to the targetSum. The recursive nature of the algorithm allows it to explore different combinations efficiently, but for larger inputs, additional optimization techniques may be necessary for better performance.
