from time import time


def canConstruct(target: str, wordBank: list[str]) -> list[str | None] | None:
    result = [False for _ in range(len(target) + 1)]
    result[0] = True

    for i in range(len(result)):
        if result[i]:
            for word in wordBank:
                if word == target[i : i + len(word)]:
                    result[i + len(word)] = True

    return result[len(target)]


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
