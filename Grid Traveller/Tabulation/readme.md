# Grid Traveller with Tabulation - Optimized Approach

The `gridTraveller` function is an efficient Python implementation of the grid traveler problem using tabulation. Tabulation is a dynamic programming technique that involves filling up a table (in this case, a 2D array) with the results of subproblems to build up the final solution. This approach significantly reduces the time complexity of the grid traveler problem, making it very efficient for larger grid sizes.

## Function Description

The `gridTraveller` function now uses a tabulation-based approach to find the number of ways to travel from the top-left corner to the bottom-right corner of a 2D grid.

## Tabulation Process

1. The function initializes a 2D array called `result` of size `(m + 1) x (n + 1)` with all elements initialized to 0.

2. The function sets `result[1][1]` to 1 because there is one way to reach the destination when both `m` and `n` are 1.

3. The function then iteratively fills the `result` table, starting from the top-left corner and moving row by row and column by column.

4. For each cell `result[x][y]`, if `x + 1` is within the valid range (i.e., less than or equal to `m`), the function adds the value of `result[x][y]` to `result[x + 1][y]`. This step represents moving down from the current cell.

5. Similarly, if `y + 1` is within the valid range (i.e., less than or equal to `n`), the function adds the value of `result[x][y]` to `result[x][y + 1]`. This step represents moving right from the current cell.

6. The function continues filling the `result` table until reaching the bottom-right corner, where the number of ways to reach the destination is stored.

7. The function finally returns the value stored in `result[m][n]`, which represents the number of ways to travel through the grid.

## Usage of Tabulation

By using tabulation, the `gridTraveller` function avoids the overhead of recursive function calls and memoization. Instead, it fills the `result` table iteratively, leading to a highly efficient solution for calculating the number of ways to travel through the grid.

## Usage

To use the `gridTraveller` function with tabulation, provide the number of rows `m` and the number of columns `n`. For example:

```python
inputs = [(1, 1), (2, 3), (3, 2), (3, 3), (18, 18)]

for input in inputs:
    result = gridTraveller(*input)
    print(f"gridTraveller{input} = {result}")
```

## Performance

The tabulation-based `gridTraveller` function provides a highly efficient solution for finding the number of ways to travel through a 2D grid. With its linear time complexity of O(m \* n), it can handle even very large grid sizes quickly and effectively.

---

The `gridTraveller` function offers an efficient and optimized solution for finding the number of ways to travel through a 2D grid using tabulation. By leveraging this dynamic programming technique, the function fills the result table iteratively, allowing for rapid computation even for larger grid sizes.
