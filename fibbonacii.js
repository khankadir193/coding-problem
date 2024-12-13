// function fibonacciBruteForce(n) {
//     if (n <= 1) return n;
//     return fibonacciBruteForce(n - 1) + fibonacciBruteForce(n - 2);
// }

// console.log(fibonacciBruteForce(5));
//1, 1, 2, 3, 5, 8, 13, 21

function fibonacciIterative(n) {
    if (n <= 1) return n;

    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        let temp = curr;
        curr = prev + curr;
        prev = temp;
    }
    return curr;
}

console.log(fibonacciBruteForce(5))

