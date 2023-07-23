const howSum = (targetSum, numbers) => {
    let result = new Array(targetSum + 1);
    result.fill(null);
    result[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (result[i] !== null) {
            for (num of numbers) {
                if (i + num <= targetSum) result[i + num] = [...result[i], num];
            }
        }
    }

    return result[targetSum];
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
