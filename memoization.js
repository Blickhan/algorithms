// memoization saves previously run function/args results in a cache object
// to prevent needlessly rerunning the same function over and over

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]) { // if result already exists
            return cache[args];
        }
        let result = fn.apply(this, args); // perform function
        cache[args] = result; // save result in cache
        return result; 
    }
}

function slowFib(n) {
    if(n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

const fib = memoize(slowFib);

// 0,1,1,2,3,5,8,13,21,34,55
console.log(fib(10));