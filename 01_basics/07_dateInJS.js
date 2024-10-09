const myDate = new Date();

// console.log(myDate.toDateString()); //       Thu Oct 10 2024
// console.log(myDate.toLocaleDateString());//  10/10/2024
// console.log(myDate.toLocaleString());//      10/10/2024, 12:49:23 am here is the dd-mm-yy format
// console.log(myDate.toTimeString());//        00:49:23 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString());//         Wed, 09 Oct 2024 19:19:23 GMT
// console.log(myDate.toString());//            Thu Oct 10 2024 00:49:23 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());//         2024-10-09T19:19:23.011Z


let myDated = new Date("03-14-2023");
// console.log(myDated.toLocaleString());


let myTimeStamps = Date.now();
console.log(myTimeStamps);
console.log(myDated.getTime());
let values = myDated.getTime() > myTimeStamps

const result = values ? 
console.log(`values of ${myDated.getTime()} is greater than ${myTimeStamps} `)  :
console.log(`values of ${myDated.getTime()} is smaller than ${myTimeStamps}`);

