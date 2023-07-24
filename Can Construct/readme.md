# The canConstruct Problem

Write a function `canConstruct(target, wordBank)` that takes in a target and an array of strings as arguments.

The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of `wordBank` together.

You may use an element of the array as many times as needed.

```text
canConstruct('', [...]) = True
```

Given `target` and `wordBank`, calculate `canConstruct(target, wordBank)`.

## Examples

### Example 1

```text
Input: target = 'skateboard', wordBank = ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']
Output: False
```

### Example 2

```text
Input: target = '', wordBank = ['cat', 'dog', 'mouse']
Output: True
```

### Example 3

```text
Input: target = 'abcdef', wordBank = ['ab', 'abc', 'cd', 'def', 'abcd']
Output: True
```

### Example 4

```text
Input: target = 'enterapotentpot', wordBank = ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']
Output: True
```

### Example 5

```text
Input: target = 'eeeeeeeeeeeeeeeeeeeeeeeeeef', wordBank = ['e', 'eeeee', 'eeeeeeeee', 'eeeeeeeeeeeeeee']
Output: False
```
