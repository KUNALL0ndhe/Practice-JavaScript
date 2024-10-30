// const summAll = function (num) {
//     let sum = 0
//     for( i = 1 ; i <= num ; i ++) {
//          sum += i
//          console.log(sum);
         
//     }
//     return num
// };

// summAll(6);



const sumAll = (num) => {
    let result = 0;
    for ( i = 0 ; i <= num ; i++) {
        result += i;
    };
    return result;
};

console.log(sumAll(6));


/**
 * 
 * BIG - O Guide.
 * calculate not dependent on input size - o(1)
 *  1)  loop - O(n)
 *  2)  nested Loop - O(n^2);
 *  3)  input size reduced by half - O(logn)
 * 
 */