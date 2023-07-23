const bestSum = (targetSum, numbers) => {
    result = Array(targetSum + 1).fill(null);
    result[0] = [];

    for (let i = 0; i <= targetSum; i++){
        if (result[i] !== null){
            for (let num of numbers){
                if (num + i <= targetSum){
                    const combination = [...result[i], num]
                    if ((result[num+i] === null) || result[num+i].length > combination.length){
                        result[num+i] = combination;
                    }
                    
                }
            }
        }
    }

    return result[targetSum];
}


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
