// immediately invoked function Expression

// some function needs to be executed immediately as soon as the code is run ;
// this is done to avoid the global variable to pollute the code.

// syntax is :> ()()

// Named Iffe

(function chai () {
    console.log(`DB one Connected`);
    // Named IIFE
    // Single IIFE
})();
// in the above function we have connected to paranthesis ()(),
// one is for the function and the other is for calling it.


( (name) => {
    console.log(`DB Two connected ${name}`);
    // arrow dunction IIFE
    // Double IIFE
    // Parameter IIFE
})("MongoDB");


(function aurCode(age) {
    console.log(`Db three connected with the named parameter given ${age}`);
    // This is the named parameter iife with thired layer of iife
} (3))