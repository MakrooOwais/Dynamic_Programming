# canConstruct Function - Recursive Approach

The `canConstruct` function checks whether it is possible to construct the `target` string from a list of words in the `wordBank`. It does this by using a recursive approach, attempting to match the beginning of the `target` string with the start of each word in the `wordBank`.

## Function Description

The `canConstruct` function receives the `target` string and a list of words `wordBank` as input.

## Recursive Process

1. If the `target` string is empty, it means the construction is successful, and the function returns `True`.
2. The function iterates through each word in the `wordBank`.
3. For each word, it checks if it matches the beginning of the `target` string. If so, it proceeds with the recursive call by removing the matched part from the `target` string.
4. The function then calls itself recursively with the modified `target` and the same `wordBank` to check if the remaining part of the `target` string can be constructed.
5. If any recursive call returns `True`, it means the `target` string can be constructed using words from the `wordBank`, and the function returns `True`.
6. If none of the recursive calls return `True`, the function returns `False`, indicating that the `target` string cannot be constructed.

## Usage

To use the `canConstruct` function, provide the `target` string and the list of words `wordBank`. The function will determine if it is possible to construct the `target` string using words from the `wordBank`.

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

The recursive approach implemented by the `canConstruct` function can be inefficient for larger inputs, especially when there are many recursive calls with overlapping subproblems. As a result, the function may take a significant amount of time to execute for certain inputs.

## Note

While the recursive approach provides a simple way to solve the problem, it is not the most efficient solution for all cases. To improve performance, consider exploring more advanced techniques like memoization or tabulation, which can optimize the solution by avoiding redundant computations and storing previously calculated results.
