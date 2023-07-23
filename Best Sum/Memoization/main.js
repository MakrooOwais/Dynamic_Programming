const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder, numbers, memo);

        if (remainderResult !== null) {
            const combination = [...remainderResult, num];

            if (
                (shortestCombination === null) ||
                (combination.length < shortestCombination.length)
            ) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

inputs = [
    [7, [2, 3]],
    [7, [2, 4]],
    [7, [5, 3, 4, 7]],
    [8, [2, 3, 5]],
    [300, [7, 14]],
];

for (i in inputs) {
    t1 = Date.now();
    result = bestSum(...inputs[i]);
    t2 = Date.now();

    console.log(
        `bestSum(${inputs[i][0]}, [${
            inputs[i][1]
        }]) = ${result} was calculated in ${(t2 - t1).toFixed(4)}ms`
    );
}
