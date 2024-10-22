const group = {
    book : 123,
    username: 'MR',
    users : {
        username: 'Kunal',
        age: 26,
        getDetails : function () {
            let username = 'Londhe';
    
           console.log(`My name is ${group.username} ${this.username} ${username}`);
        },
    },
}

console.log((group.users.getDetails()));


/*
 constructor function
 step 1: new object is created,
 step 2:a contructor function is called with the new keyword.
        the arguments are packed and bundled. 
 step 3: this keyword is collects all the arguments and inject inside the empty object
 stp 4: we get this inside the function.


 again revision
 -OBJECT IS CREATED----------1
 --VALUES ARE COLLECT AND PASSON-----2
 -THIS.VARIABLE IS CREATED AND ADDS THE VALUES OF ABOVE----3
 -LAST AVAILABLE WHEN CALLED
 
 
 */