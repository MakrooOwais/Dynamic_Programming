# The Grid Traveller

Say that you are a traveller on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid of dimension `m * n`

Write a function `gridTraveller(m, n)` that calculates this.

```text
gridTraveller(1, 1) = 1
gridTraveller(m, 0) = 0 and gridTraveller(0, n) = 0 , for m, n >= 1.
```

Given `m` and `n`, calculate `gridTraveller(m, n)`.

## Examples

### Example 1

```text
Input: m = 1, n = 1
Output: 1
```

### Example 2

```text
Input: m = 2, n = 3
Output: 3
```

### Example 3

```text
Input: m = 3, n = 2
Output: 3
```

### Example 4

```text
Input: m = 3, n = 3
Output: 6
```

### Example 5

```text
Input: m = 18, n = 18
Output: 2333606220
```
