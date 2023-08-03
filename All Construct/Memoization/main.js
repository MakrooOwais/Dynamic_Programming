const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") {
        return [[]];
    }

    let result = []

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let suffixWays = allConstruct(suffix, wordBank, memo);
            let targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
            }
        }

    memo[target] = result;
    return result;
}

const inputs = [
    ["skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]],
    ["", ["cat", "dog", "mouse"]],
    ["abcdef", ["ab", "abc", "cd", "def", "abcd"]],
    ["enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]],
    ["eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "eeeee", "eeeeeeeee", "eeeeeeeeeeeeeee"]],
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
