# allConstruct Function using Memoization

The `allConstruct` function is a Python implementation that finds all possible combinations of words from the given word bank that can be used to construct the target string. This implementation utilizes memoization to optimize the efficiency of the algorithm.

## Function Signature

```python
def allConstruct(target: str, wordBank: list[str], memo: dict = {}) -> list[str | None] | None:
```

## Input Parameters

- `target` (str): The target string that needs to be constructed.
- `wordBank` (list[str]): A list of words that can be used to construct the target string.
- `memo` (dict): A dictionary used for memoization to store previously computed results. It is an optional parameter and is initialized as an empty dictionary.

## Output

The function returns a list containing all possible combinations of words from the word bank that can be used to construct the target string. If it is not possible to construct the target string using the given word bank, the function returns `None`.

## Algorithm and Approach

The `allConstruct` function uses a recursive approach to find all possible combinations of words. However, to optimize the algorithm and avoid redundant calculations, it utilizes memoization. Memoization is a technique of storing the results of expensive function calls and returning the cached result when the same inputs occur again.

The algorithm starts by checking if the target string is an empty string. If it is, it returns a list containing an empty list, representing that the target string can be constructed with no words.

Next, the function iterates through the word bank and checks if any word in the bank matches the beginning of the target string. If a match is found, the algorithm recursively calls the `allConstruct` function with the remaining part of the target string (suffix) and the same word bank. It then appends the current word to each combination returned by the recursive call to form new combinations.

By doing this, the function finds all possible combinations of words that can be used to construct the target string.

## Time Complexity

The time complexity of the `allConstruct` function with memoization is improved compared to the simple recursive approach, as memoization helps to avoid redundant calculations. The time complexity can be expressed as O(n \* m), where n is the length of the target string and m is the number of words in the word bank. This is because the function computes the result for each prefix of the target string once and stores it in the memo dictionary.
