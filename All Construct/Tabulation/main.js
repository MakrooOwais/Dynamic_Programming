const allConstruct = (target, wordBank) => {
    const result = Array(target.length + 1)
        .fill()
        .map(() => []);

    result[0] = [[]];

    for (let i = 0; i < target.length; i++) {
        for (word of wordBank) {
            if (word === target.slice(i, i + word.length)) {
                result[i + word.length].push(
                    ...result[i].map((subArray) => [...subArray, word])
                );
            }
        }
    }

    return result[target.length];
};

const inputs = [
    ["skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]],
    ["", ["cat", "dog", "mouse"]],
    ["abcdef", ["ab", "abc", "cd", "def", "abcd"]],
    ["enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]],
    [
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
        ["e", "eeeee", "eeeeeeeee", "eeeeeeeeeeeeeee"],
    ],
];

for (i in inputs) {
    t1 = Date.now();
    result = allConstruct(...inputs[i]);
    t2 = Date.now();

    console.log(
        `allConstruct(${inputs[i][0]}, [${
            (inputs[i].slice(1, inputs[i].length))
        }]) = [${result}] was calculated in ${(t2 - t1).toFixed(4)}ms`
    );
}
