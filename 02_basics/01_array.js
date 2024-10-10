let arr = [0,1,2,3,4,5,6,7,8,9,10];
// console.log(arr);


let slice = arr.slice(5,9);
// console.log(slice, "slice method from  5 till last all 9 an all excluded.");
// console.log(arr, "OG array");



let splice = arr.splice(0,5);
// console.log(splice, " from  till 4 also 5 excluded");
// console.log(arr," Modified OG array");

let myDCU = ["Superman", "Batman", "Aquaman", "Wonderwoman"];
let myMCU = ["Ironman", "DrStrange", "Panther", "Hulk"];

let Heros1 = myDCU.concat(myMCU);
// console.log(Heros1);  merge the array

let Heros2 = [...myDCU,...myMCU];
// console.log(Heros2); merge the array


let jumbledArray = [1,2,3,4,[11,12,13,14],5,6,7,[28,29,[100,[200,[300,[400]]]]]];

// console.log(jumbledArray);

// console.log(jumbledArray.flat(1),"level 1");
// console.log(jumbledArray.flat(2),"level 2");
// console.log(jumbledArray.flat(3),"level 3");
// console.log(jumbledArray.flat(Infinity),"Infinity"); // makes the nested array into ine form of array, providing the depth if we want the depth to be in level


// let voids = Array.isArray("Kunal"); // gives you the boolean wether it is an array or not
// console.log(voids);

let valves = Array.from("Kunal");
console.log(typeof(valves));
