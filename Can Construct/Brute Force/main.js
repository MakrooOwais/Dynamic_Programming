const canConstruct = (target, wordBank) => {
    if (target === "") {
        return true;
    }

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
    }

    return false;
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
    result = canConstruct(...inputs[i]);
    t2 = Date.now();

    console.log(
        `canConstruct(${inputs[i][0]}, [${
            (inputs[i].slice(1, inputs[i].length))
        }]) = ${result} was calculated in ${(t2 - t1).toFixed(4)}ms`
    );
}
