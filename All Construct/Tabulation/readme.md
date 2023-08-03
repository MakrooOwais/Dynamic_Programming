# allConstruct Function - Tabulation Approach

The `allConstruct` function has been optimized using a tabulation approach. Tabulation is a bottom-up technique that avoids recursion and solves subproblems in a systematic order, storing intermediate results in an array to build up the final solution.

## Function Description

The `allConstruct` function takes two inputs: the `target` string and a list of words `wordBank`.

## Tabulation Approach

1. The function initializes an array `result` of size `len(target) + 1` to keep track of all possible ways to construct the `target` string up to each index.

2. Since there is one way to construct an empty string (by not using any words), `result[0]` is set to a list containing an empty list `[]`.

3. The function iterates through each index `i` of the `target` string.

4. For each index `i`, it iterates through each word in the `wordBank`.

5. For each word, it checks if it matches the substring starting from index `i` and having the same length as the word.

6. If a match is found, it means we can construct the word at index `i`. So, we extend the list at `result[i + len(word)]` with all the lists in `result[i]`, each extended with the word.

7. By doing so, we generate all possible combinations of words that can be used to construct the `target` string up to index `i + len(word)`.

8. The process continues for all indices and words in the `wordBank`, effectively building up all possible ways to construct the `target` string.

9. After the loop, `result[len(target)]` contains a list of lists, where each inner list represents one possible combination of words that constructs the entire `target` string.

10. The function returns the final `result[len(target)]`, representing all possible combinations of words that can construct the `target` string.

## Usage

To use the `allConstruct` function, provide the `target` string and the list of words `wordBank`. The function will find all possible combinations of words that can be used to construct the `target` string.

## Performance

The tabulation approach implemented by the `allConstruct` function provides an efficient solution to the problem. By avoiding recursion and using an iterative approach, the function can handle large inputs with significant performance improvements.

## Note

Tabulation is particularly useful when the problem exhibits overlapping subproblems and optimal substructure. In such cases, tabulation ensures that each subproblem is solved only once, and the results are stored for future use, leading to a more efficient solution.
