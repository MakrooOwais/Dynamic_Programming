const countConstruct = (target, wordBank) => {
    result = Array(target.length + 1).fill(0);
    result[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        if (result[i]) {
            for (let word of wordBank) {
                if (word === target.slice(i, i + word.length)) {
                    result[i + word.length] += result[i];
                }
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

for (i of inputs) {
    t1 = Date.now();
    result = countConstruct(...i);
    t2 = Date.now();

    console.log(
        `countConstruct(${i}) = ${result} was calculated in ${(t2 - t1).toFixed(
            4
        )}ms`
    );
}
