// let nums = [2,7,11,15];
// let target = 9;

// let TwoSum = function (nums, target) {
//     for ( i = 0 ; i < nums.length ; i++ ) {
//         for ( j = i + 1 ; j < nums.length ; j++ ) {
//             if ( nums[i] + nums[j] === target );
//             return console.log(i , j);
            
//         };
        
//     }
//     return null;
// };

// TwoSum(nums, target)

let nums = [2,7,11,15];
let target = 9;

const twoSums = (nums, target) => {
    for (i = 0; i < nums.length - 1 ; i++) {
        for (j = i + 1 ; i < nums.length - 1 ; j++ ) {
            if ( nums[i] + nums[j] === target) {
                return (console.log(i,j))
            }
        }
    };
    return null;
};

twoSums(nums,target)