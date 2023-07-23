const gridTraveller = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

inputs = [
    [1, 1],
    [2, 3],
    [3, 2],
    [3, 3],
    [18, 18],
];

let t1, t2;

for (input of inputs) {
    t1 = Date.now();
    result = gridTraveller(...input);
    t2 = Date.now();
    console.log(
        `gridTraveller(${input}) = ${result} was calculated in ${(
            t2 - t1
        ).toFixed(4)}ms`
    );
}
