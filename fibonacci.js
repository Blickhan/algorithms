function fib(n) {
    let results = [0,1];
    for(let i = 2; i <= n; i++) {
        results[i] = results[i-1] + results[i-2];
    }
    return results[n];
}

// 0,1,1,2,3,5,8,13
console.log(fib(7));

// or

// super slow unless memoization is used
function fibRecursive(n) {
    if(n < 2) {
        return n;
    }
    return fibRecursive(n-1) + fibRecursive(n-2);
}

console.log(fibRecursive(7));