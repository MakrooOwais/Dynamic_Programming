from time import time


def allConstruct(target: str, wordBank: list[str]) -> list[str | None] | None:
    result = [[] for _ in range(len(target) + 1)]
    result[0] = [[]]

    for i in range(len(result)):
        for word in wordBank:
            if word == target[i : i + len(word)]:
                result[i+len(word)].extend([*x, word] for x in result[i])

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
    result = allConstruct(*input)
    t2 = time()

    print(f"allConstruct{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms")
