function callMe (username) {
    this.username = username  
};

function callAll ( username, age, password) {

    callMe.call(this,username)
    this.age = age
    this.password = password
};

const user = new callAll('Kunal', 26, "123");
console.log(user);

