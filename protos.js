let personProto = {
    name: "Unnamed",
    address: "Homeless",
    getAddressLabel: function () {
        return this.name + " lives at " + this.address;
    }
};

function Person(name, address) {
    if (name !== undefined) {
        this.name = name;
    }
    if (address !== undefined) {
        this.address = address;
    }
}

Person.prototype = personProto;

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
console.log(fred.getAddressLabel());
