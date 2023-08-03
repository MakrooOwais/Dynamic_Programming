# The allConstruct Problem

Write a function `allConstruct(target, wordBank)` that takes in a target and an array of strings as arguments.

The function should return a 2D array containing all the ways that the `target` can be constructed by concatenating elements of `wordBank` together.

You may use an element of the array as many times as needed.

```text
allConstruct('', [...]) = []
```

Given `target` and `wordBank`, calculate `allConstruct(target, wordBank)`.

## Examples

### Example 1

```text
Input: target = 'skateboard', wordBank = ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']
Output: []
```

### Example 2

```text
Input: target = 'purple', wordBank = ['purp', 'p', 'ur', 'le', 'purpl']
Output: [
    ['purp', 'le'],
    ['p', 'ur', 'p', 'le']
]
```

### Example 3

```text
Input: target = 'abcdef', wordBank = ["ab", "abc", "cd", "def", "abcd", "ef", "c"]
Output: [
    ['ab', 'cd', 'ef'], 
    ['abc', 'def'], 
    ['abcd', 'ef']
    ]

```

### Example 4

```text
Input: target = 'enterapotentpot', wordBank = ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']
Output: [
    ['enter', 'a', 'p', 'ot', 'ent', 'p', 'ot'], 
    ['enter', 'a', 'p', 'ot', 'ent', 'p', 'o', 't'], 
    ['enter', 'a', 'p', 'o', 't', 'ent', 'p', 'ot'], 
    ['enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't']
    ]

```

### Example 5

```text
Input: target = 'eeeeeeeeeeeeeeeeeeeeeeeeeef', wordBank = ['e', 'eeeee', 'eeeeeeeee', 'eeeeeeeeeeeeeee']
Output: []
```
