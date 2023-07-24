from time import time


def canConstruct(
    target: str, wordBank: list[str], memo: dict = {}
) -> list[str | None] | None:
    if target in memo.keys():
        return memo.get(target)
    if target == "":
        return True

    for word in wordBank:
        if word == target[0 : len(word)]:
            if canConstruct(target[len(word) :], wordBank) == True:
                memo[target] = True
                return True

    memo[target] = False
    return False


inputs = [
    ("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]),
    ("", ["cat", "dog", "mouse"]),
    ("abcdef", ["ab", "abc", "cd", "def", "abcd"]),
    ("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]),
    ("eeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "eeeee", "eeeeeeeee", "eeeeeeeeeeeeeee"]),
]

for input in inputs:
    t1 = time()
    result = canConstruct(*input)
    t2 = time()

    print(f"canConstruct{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms")
