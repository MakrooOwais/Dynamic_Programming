from time import time


def countConstruct(target: str, wordBank: list[str]) -> int:
    if target == "":
        return 1
    
    totalCount = 0

    for word in wordBank:
        if word == target[0 : len(word)]:
            totalCount += countConstruct(target[len(word) :], wordBank)

    return totalCount


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
