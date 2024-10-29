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

// twoSums(nums,target)

let student = ["John", "Jane" , "jenny" , "jessi" , "ram"];

// function findStudent (allStudents , studentName) {
//     allStudents.map( (stud) =>  {
//         if (stud === studentName) 
        
//             console.log(`found it ${stud}`)
//         return stud;
        
//         } 
// );
// return null
// };

function findStudent (allStudents, studentName) {
    for ( i = 0; i <= studentName.length ; i++) {
        if ( allStudents[i] === studentName ) {
            return `Found it ${studentName} at index ${i}`
        }
    }
}

console.log(findStudent(student , "jessi"))
