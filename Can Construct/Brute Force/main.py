from time import time


def canConstruct(target: str, wordBank: list[str]) -> list[str | None] | None:
    if target == "":
        return True

    for word in wordBank:
        if word == target[0 : len(word)]:
            if canConstruct(target[len(word) :], wordBank) == True:
                return True

    return False


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
    t1 = time()
    result = canConstruct(*input)
    t2 = time()

    print(f"canConstruct{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms")
