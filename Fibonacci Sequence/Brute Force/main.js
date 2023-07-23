const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
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
