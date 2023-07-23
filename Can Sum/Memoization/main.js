const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (number of numbers) {
        remainder = targetSum - number;
        if (canSum(remainder, numbers, memo))
        {
            memo[targetSum] = true;
            return true;
        }
        
    }

    memo[targetSum] = false;
    return false;
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
        `canSum(${inputs[i][0]}, [${inputs[i][1]}]) = ${result} was calculated in ${(t2 - t1).toFixed(
            4
        )}ms`
    );
}