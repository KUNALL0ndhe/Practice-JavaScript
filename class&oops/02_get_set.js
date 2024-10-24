let Hero = function ( email , password ) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase()
        },

        set: function(value) {
            this._password = value
        }

    })
};
const Chai = new Hero('kunal','Avvcsccsfj');
console.log(Chai.password);

/**
 * 
 * This is another method to define the get and the set property and to 
 * get the variable from the memory and set in the memory
 * this is the function method of get and the set method
 * 
 */