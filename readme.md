# Dynamic Programming, Memoization, and Tabulation

Dynamic Programming, Memoization, and Tabulation are powerful methods of implementation used in computer science and programming to optimize and efficiently solve complex problems. Each method has its unique approach to breaking down problems and reusing subproblem solutions to avoid redundant calculations and improve efficiency. In this README, we will explore the concepts of Dynamic Programming, Memoization, and Tabulation, along with their methods of implementation.

## Dynamic Programming

Dynamic Programming (DP) is an algorithmic technique used to solve problems by breaking them down into smaller overlapping subproblems and solving each subproblem only once. The solutions to subproblems are stored in a data structure (such as an array or a dictionary) so that they can be reused when needed. DP is particularly useful for problems with optimal substructure and overlapping subproblems.

### Method of Implementation:

1. Identify the subproblems: Decompose the original problem into smaller subproblems that share common substructures.
2. Define the recurrence relation: Express the solution to a subproblem in terms of solutions to its smaller subproblems.
3. Memoization or Tabulation: Store the solutions to subproblems in a data structure to avoid redundant calculations.

## Memoization

Memoization is a specific method of implementing Dynamic Programming. It involves caching the results of expensive function calls and reusing those results when the same inputs occur again. By memoizing the function's results, redundant calculations can be avoided, leading to improved performance.

### Method of Implementation:

1. Before computing the result of a function with specific inputs, check if the result for those inputs is already present in a data structure (usually a dictionary or a hash table).
2. If the result is found, return it immediately.
3. If the result is not found, compute the result as usual and store it in the data structure before returning it.

## Tabulation

Tabulation is another method of implementing Dynamic Programming. Instead of using recursion and memoization, tabulation builds the solution iteratively by filling up a data structure (usually an array or a matrix). Tabulation is often used when the order of computation doesn't matter and when there is a clear order of subproblem dependencies.

### Method of Implementation:

1. Create a data structure (e.g., an array or a matrix) to store solutions to subproblems.
2. Initialize the base cases or initial values in the data structure.
3. Fill up the data structure iteratively, following the order of subproblem dependencies.
4. Use the final value in the data structure as the solution to the original problem.

## Summary

- **Dynamic Programming** is a powerful algorithmic technique used to solve problems by breaking them down into smaller overlapping subproblems and reusing solutions to avoid redundant calculations.
- **Memoization** is a method of implementing Dynamic Programming by caching results of function calls to avoid recomputation.
- **Tabulation** is another method of implementing Dynamic Programming by filling up a data structure iteratively and following the order of subproblem dependencies.

Both memoization and tabulation are effective approaches for implementing Dynamic Programming and greatly improve the efficiency of solving complex problems. Depending on the nature of the problem and its subproblems, one method may be more suitable than the other. Choosing the right method of implementation can lead to significant performance improvements and more scalable solutions.
