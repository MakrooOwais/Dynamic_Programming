const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        remainder = targetSum - num;
        remainderResult = howSum(remainder, numbers);
        if (remainderResult !== null) {
            return [...remainderResult, num];
        }
    }

    return null;
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
    result = howSum(...inputs[i]);
    t2 = Date.now();

    console.log(
        `howSum(${inputs[i][0]}, [${
            inputs[i][1]
        }]) = [${result}] was calculated in ${(t2 - t1).toFixed(4)}ms`
    );
}
