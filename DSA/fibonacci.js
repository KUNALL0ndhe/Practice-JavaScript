const finonacci = (n) => {
    let fib = [0,1];

    for ( i = 2; i<=n ; i++) {

        fib[i] = fib[i-1] + fib[i-2];
    };
    return fib
};

console.log(finonacci(3), 'This is fibonacci')