from time import time


def countConstruct(target: str, wordBank: list[str]) -> int:
    result = [0 for _ in range(len(target) + 1)]
    result[0] = 1

    for i in range(len(target)):
        if result[i]:
            for word in wordBank:
                if word == target[i : i + len(word)]:
                    result[i + len(word)] += result[i]

    return result[len(target)]


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
    result = countConstruct(*input)
    t2 = time()

    print(
        f"countConstruct{input} = {result} was calculated in {(t2 - t1)*1000.0:.4f}ms"
    )
