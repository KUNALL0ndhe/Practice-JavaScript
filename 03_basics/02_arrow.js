let user = {
    username: 'Kunal',
    age: 26,
    user1: function() {
        console.log(`${this.username}, welcome to my function`);
        console.log((this));
        
        
    },  
}

user.user1();

console.log(this);

let greet = () => {
    console.log(this);
    
};

greet();

// let addTwo =(a , b) => (a + b); 
// let addTwo =(a , b) => {
//     return  a + b
// }; 

let addTwo =(a , b) => ({a : 'surname'}); 


console.log(addTwo(3,6));