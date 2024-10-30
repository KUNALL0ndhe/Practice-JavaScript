const reverseFactorial = (n) => {
    let result = 1;

    for ( i = n ; i >= 1 ; i--) {
        result =  result * i;
        console.log(result)
    };
    return result;
}

const Factorial = (n) => {
    let result = 1;

    for ( i = 2 ; i <= n ; i++) {
        result = result * i
        console.log(result)
    };

    return result
}



 console.log(reverseFactorial(5))
 console.log('----------------');
 console.log(Factorial(5))