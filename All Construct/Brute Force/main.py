from time import time


def allConstruct(target: str, wordBank: list[str]) -> list[str | None] | None:
    if target == "":
        return [[]]

    result = []

    for word in wordBank:
        
        if word == target[0 : len(word)]:
            suffix = target[len(word) :]
            suffixWays =  allConstruct(suffix, wordBank)
            targetWays = [[word, *x] for x in suffixWays]
            result = [*result, *targetWays]

    return result


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
    result = allConstruct(*input)
    t2 = time()

    print(f"allConstruct{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms")
