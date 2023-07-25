# The countConstruct Problem

Write a function `howConstruct(targetSum, wordBank)` that takes in a target string and an array of strings as arguments.

The function should return the number of ways that the `target` can be constructed by concatenating elements of `wordBank` array. If there is no combination that adds up to the targetSum, then return None.

You may use an element of the array as many times as needed.

```text
howConstruct('', [...]) = 1
```

Given `targetSum` and `wordBank`, calculate `howConstruct(target, wordBank)`.

## Examples

### Example 1

```text
Input: target = 'skateboard', wordBank = ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']
Output: 0
```

### Example 2

```text
Input: target = '', wordBank = ['cat', 'dog', 'mouse']
Output: 1
```

### Example 3

```text
Input: target = 'abcdef', wordBank = ['ab', 'abc', 'cd', 'def', 'abcd']
Output: 1
```

### Example 4

```text
Input: target = 'enterapotentpot', wordBank = ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']
Output: 4
```

### Example 5

```text
Input: target = 'eeeeeeeeeeeeeeeeeeeeeeeeeef', wordBank = ['e', 'eeeee', 'eeeeeeeee', 'eeeeeeeeeeeeeee']
Output: 0
```
