const canSum = (targetSum, numbers) => {
    let result = Array(targetSum + 1).fill(false);
    result[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        for (let num of numbers) {
            if (result[i]) {
                if (i + num <= targetSum) result[i + num] = true;
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
    result = canSum(...inputs[i]);
    t2 = Date.now();

    console.log(
        `canSum(${inputs[i][0]}, [${
            inputs[i][1]
        }]) = ${result} was calculated in ${(t2 - t1).toFixed(4)}ms`
    );
}
