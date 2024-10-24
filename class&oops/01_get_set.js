class User {
    constructor ( username, password ) {
        this._username = username;
        this._password = password;
    }

    get password() {
        return `CBA${this._password.toUpperCase()}CBA`
    };

    set password(value) {
        this._password = value;
    }
    
};

const Chai = new User("Kunal", "abc");

console.log(Chai.password); // ABC


/*
the above method is used by me 
here to avoid the memory stack problem issue we use the _ 'Underscroll' in all the variable for the reference use _ with this keyword
and when calling use the without to transfer the logic to new variable
here we dont have any memory stack problem also the logic is been transfered to the new variable without the underscroll property


this getter and setter is used in the class constructor

*/

class Hero {
    constructor ( name, power) {
        this._name = name;
        this._power = power;
    };

    get name() {
        return `${this._name.toUpperCase()} is from Marvel`
    };

    set name (value) {
        this._name = value;
    };

    get power() {
        return `${this._power.concat().toUpperCase()}`
    }

    set power (value) {
        this._power = `${value} is Awesome`
    }
};

const Avenger = new Hero("superman",'man of steel');

console.log(`${Avenger.name} No he's from DC ${Avenger.power}`);
