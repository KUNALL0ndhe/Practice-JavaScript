// const finonacci = (n) => {
//     let fib = [0,1];

//     for ( i = 2; i<=n ; i++) {

//         fib[i] = fib[i-1] + fib[i-2];
//     };
//     return fib
// };

// console.log(finonacci(3), 'This is fibonacci')



const funcFibonacci = (num) => {
let Myfibonacci = [0,1]

for (i = 2 ; i <= num ; i++) {
    Myfibonacci[i] = Myfibonacci[i-1] + Myfibonacci[i-2];

};
return Myfibonacci;
};

console.log(funcFibonacci(5))


/**
 * 
 * Here the BIG O is O(n)
 * when the input N increases correspondingly the runtine also increases.
 * 
 * the worst case scenerio -> O(n)
 */