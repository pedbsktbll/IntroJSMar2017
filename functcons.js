function Person(name, address) {
    this.name = (name !== undefined) ? name : "Unnamed";
    this.address = (address !== undefined) ? address : "Homeless";
    this.getAddressLabel = function() {
        return this.name + " lives at " + this.address;
    };
}

let fred = new Person("Fred");
let jim = new Person("Jim", "house on the hill");

console.log(fred.getAddressLabel());
console.log(jim.getAddressLabel());
