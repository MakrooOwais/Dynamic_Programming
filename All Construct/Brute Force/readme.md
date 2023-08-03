# allConstruct Function

The `allConstruct` function is a Python implementation that finds all possible combinations of words from the given word bank that can be used to construct the target string. It follows a recursive approach to compute the combinations efficiently.

## Function Signature

```python
def allConstruct(target: str, wordBank: list[str]) -> list[str | None] | None:
```

## Input Parameters

- `target` (str): The target string that needs to be constructed.
- `wordBank` (list[str]): A list of words that can be used to construct the target string.

## Output

The function returns a list of lists containing all possible combinations of words from the word bank that can be used to construct the target string. If it is not possible to construct the target string using the given word bank, the function returns `None`.

## Algorithm and Approach

The `allConstruct` function uses a recursive approach to find all possible combinations of words. It starts by checking if the target string is empty. If it is, the function returns a list containing an empty list, representing that the target string can be constructed with no words.

Next, the function iterates through the word bank and checks if any word in the bank matches the beginning of the target string. If a match is found, it recursively calls the `allConstruct` function with the remaining part of the target string (suffix) and the same word bank. It then forms new combinations by appending the current word to each combination returned by the recursive call.

By doing this, the function finds all possible combinations of words that can be used to construct the target string.

## Time Complexity

The time complexity of the `allConstruct` function depends on the size of the word bank and the length of the target string. In the worst case, when the word bank contains a single short word, and the target string is long, the time complexity can be exponential, O(n^m), where n is the length of the target string and m is the number of words in the word bank. This is because the function explores all possible combinations recursively.
