const gridTraveller = (m, n) => {
    let result = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));

    result[1][1] = 1;

    for (let x = 0; x <= m; x++) {
        for (let y = 0; y <= n; y++) {
            if (x + 1 <= m) result[x + 1][y] += result[x][y];
            if (y + 1 <= n) result[x][y + 1] += result[x][y];
        }
    }

    return result[m][n];
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
