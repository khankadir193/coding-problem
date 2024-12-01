function fibonacci(n) {
    if (n === 0) return 0;  // Base case
    if (n === 1) return 1;  // Base case
    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive step
}

console.log(fibonacci(7));  // Output: 8
// calculating fibbonacci series
// 1 1 2 3 5 8 13 // fibvalue 
// 1 2 3 4 5 6 7 // index