let arr = [0,1,2,3,4,5,6,7,8,9,10];
console.log(arr);


let slice = arr.slice(5,9);
console.log(slice, "slice method from  5 till last all 9 an all excluded.");
console.log(arr, "OG array");



let splice = arr.splice(0,5);
console.log(splice, " from  till 4 also 5 excluded");
console.log(arr," Modified OG array");

