function makePerson(name, address) {
    let self = {};
    self.name = (name !== undefined) ? name : "Unnamed";
    self.address = (address !== undefined) ? address : "Homeless";
    self.getAddressLabel = function() {
        return this.name + " lives at " + this.address;
    };
    return self;
}

let fred = makePerson("Fred");
let jim = makePerson("Jim", "house on the hill");

console.log(fred.getAddressLabel());
console.log(jim.getAddressLabel());
