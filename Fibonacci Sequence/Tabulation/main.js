const fib = (n) => {
    let result = Array(n + 1).fill(0);
    result[1] = 1;

    for (let i = 0; i < n + 1; i++) {
        if (i + 1 <= n) result[i + 1] += result[i];
        if (i + 2 <= n) result[i + 2] += result[i];
    }

    return result[n];
};

let inputs = [2, 6, 7, 8, 50];
const d = new Date();
let t1, t2;
for (let input of inputs) {
    t1 = d.getTime();
    result = fib(input);
    t2 = d.getTime();
    console.log(
        `Fib(${input}) = ${result} was calculated in ${(t2 - t1).toFixed(4)}ms`
    );
}
