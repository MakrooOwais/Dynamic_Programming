# canConstruct Function with Memoization - Optimized Approach

The `canConstruct` function is an enhanced version of the previous implementation, which uses memoization to optimize the recursive approach. Memoization helps store previously calculated results for specific inputs to avoid redundant computations and improve the overall performance of the function.

## Function Description

The `canConstruct` function takes three inputs: the `target` string, a list of words `wordBank`, and an optional `memo` dictionary to store intermediate results.

## Recursive Approach with Memoization

1. If the `target` string is found in the `memo` dictionary, the function returns the result associated with that `target` without further calculations. This helps prevent redundant computations and significantly improves performance for repeated subproblems.

2. If the `target` string is empty, it means the construction is successful, and the function returns `True`.

3. The function iterates through each word in the `wordBank`.

4. For each word, it checks if it matches the beginning of the `target` string. If so, it proceeds with the recursive call by removing the matched part from the `target` string.

5. The function then calls itself recursively with the modified `target` and the same `wordBank` to check if the remaining part of the `target` string can be constructed.

6. If any recursive call returns `True`, it means the `target` string can be constructed using words from the `wordBank`, and the function returns `True`.

7. If none of the recursive calls return `True`, the function returns `False`, indicating that the `target` string cannot be constructed.

8. Before returning, the function stores the result in the `memo` dictionary for the current `target` string to be reused later if needed.

## Usage

To use the `canConstruct` function, provide the `target` string and the list of words `wordBank`. Optionally, you can pass a `memo` dictionary to store intermediate results. The function will determine if it is possible to construct the `target` string using words from the `wordBank`.

```python
inputs = [
    ("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]),
    ("", ["cat", "dog", "mouse"]),
    ("abcdef", ["ab", "abc", "cd", "def", "abcd"]),
    ("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]),
    (
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
        ["e", "eeeee", "eeeeeeeee", "eeeeeeeeeeeeeee"],
    ),
]

for input in inputs:
    result = canConstruct(*input)
    print(f"canConstruct{input} = {result}")

```

## Performance

With memoization, the `canConstruct` function significantly improves performance compared to the previous recursive implementation. By avoiding redundant computations, the function can handle larger inputs efficiently.

## Note

While memoization enhances the recursive approach, it still has limitations for very long `target` strings and large `wordBank` lists. For even greater optimization, consider exploring tabulation, which uses an iterative approach and can provide further performance improvements for complex problems.
