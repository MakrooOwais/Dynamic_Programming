# Grid Traveller - Recursive Approach

The `gridTraveller` function is a Python implementation of a recursive algorithm to find the number of ways to travel from the top-left corner of a 2D grid to the bottom-right corner. In this grid, you can only move either right or down at each step.

## Function Description

The `gridTraveller` function takes two parameters:

1. `m`: An integer representing the number of rows in the grid.
2. `n`: An integer representing the number of columns in the grid.

The function returns the number of ways to reach the bottom-right corner of the grid from the top-left corner.

## Recursive Algorithm

The recursive algorithm for finding the number of ways to travel through the grid is as follows:

1. Base cases:

    - If both `m` and `n` are 1, it means you are already at the bottom-right corner of the grid, so there is only one way to reach the destination, and the function returns 1.
    - If either `m` or `n` is 0, it means you are outside the grid, and there are no valid paths, so the function returns 0.

2. For any other position in the grid (excluding the base cases), the function recursively calls itself twice with two different moves:

    - Move right: `gridTraveller(m, n - 1)` to move one step right.
    - Move down: `gridTraveller(m - 1, n)` to move one step down.

3. The function adds the results of the two recursive calls to get the total number of ways to reach the bottom-right corner of the grid from the top-left corner.

4. The recursive calls continue until the base cases are reached, at which point the function starts returning the computed number of ways back through the chain of recursive calls.

## Usage

To use the `gridTraveller` function, provide the number of rows `m` and the number of columns `n` as inputs. For example:

```python
inputs = [(1, 1), (2, 3), (3, 2), (3, 3), (18, 18)]

for input in inputs:
    result = gridTraveller(*input)
    print(f"gridTraveller{input} = {result}")
```

## Performance

The recursive approach to finding the number of ways in the grid has an exponential time complexity, which makes it highly inefficient for larger grids. As the grid size increases, the function's execution time grows rapidly, making it impractical for grids of moderate to large sizes.

## Note

For larger grids, consider using memoization or tabulation to optimize the solution. Memoization involves caching intermediate results to avoid redundant calculations, while tabulation builds the solution iteratively by filling up a table. These techniques greatly improve the performance of the grid traveler problem for larger grid sizes.

---

The `gridTraveller` function provides a recursive solution to finding the number of ways to travel through a 2D grid. While it works fine for small grids, its exponential time complexity makes it inefficient for larger grids. Consider using memoization or tabulation for more efficient solutions when dealing with bigger grid sizes.
