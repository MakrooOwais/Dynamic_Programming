const canConstruct = (target, wordBank) => {
    result = Array(target.length + 1).fill(false);
    result[0] = true;

    for (i in result){
        if (result[i]){
            for (word of wordBank){
                if(word === target.slice(i, i + word.length)){
                    result[i+word.length] = true;
                }
            }
        }
    }

    return result[target.length];
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
