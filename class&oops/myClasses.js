// function User (username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// };

// User.prototype.encryptPassword = function () {
//     return `${this.password} is encrypted.`;
// };

// User.prototype.changeName = function () {
//     return `${this.username} is changed to ${this.username.toUpperCase()}`
// };

// const Kunal = new User("Kunal", "kunal@gmail.com", 123);

// console.log(Kunal.encryptPassword());
// console.log(Kunal.changeName());

// above is the old method

// ------Below is the new method ---------------


class user {
    constructor (username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword () {
        return `####${this.password}abc*** is encrypted`
    }

    changeNameCap () {
        return `${this.username} is converted to capital ${this.username.toUpperCase()}`
    };
};

const name = new user('kunal' , 'email.com', 123);

console.log(name.encryptPassword());
console.log(name.changeNameCap())