"use strict";

let personProto = {
    name: "Unnamed",
    address: "Homeless",
    getAddressLabel: function () {
        return this.name + " lives at " + this.address;
    }
};

function Person(name, address) {
    let self = Object.create(personProto);
    Object.defineProperty(self, 'stuff', {
        configurable: true,
        enumerable: false,
        value: "Lots of stuff",
        writable: true
    });
    Object.defineProperty(self, 'fakefield', {
        configurable: false,
        enumerable: false,
        get: function() {
            return this.storage;
        },
        set: function(val) {
            this.storage = val;
            console.log("setting value " + val);
        }
    });
    if (name !== undefined) {
        self.name = name;
    }
    if (address !== undefined) {
        self.address = address;
    }
    return self;
}



let fred = new Person("Fred");
let jim = new Person("Jim", "house on the hill");

console.log(fred.getAddressLabel());
console.log(jim.getAddressLabel());

jim.__proto__.address = "In a tent";
console.log(fred.getAddressLabel());
        
let broken = {
    name : "Weird",
    address : ""    
};

fred.__proto__ = broken;
//console.log(fred.getAddressLabel());

console.log(jim.stuff);
jim.stuff = "Even more stuff than before";
console.log(jim.stuff);
for (let k in jim) {
    console.log(k);
}

console.log("--------------------------");
console.log("jim's name is  " + jim.name);
delete jim.name;
console.log("jim's name is  " + jim.name);

console.log("Jim's stuff is " + jim.stuff);
delete jim.stuff;
console.log("Jim's stuff is " + jim.stuff);

console.log(jim.fakefield);
jim.fakefield = "99 red baloons";
console.log(jim.fakefield);
