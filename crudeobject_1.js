let self = {};
self.name = "Fred";
self.address = "Homeless";
self.getAddressLabel = function () {
    return this.name + " lives at " + this.address;
};
let fred = self;

self = {};
self.name = "Jim";
self.address = "Over the rainbow";
self.getAddressLabel = function () {
    return this.name + " lives at " + this.address;
};
let jim = self;

console.log(fred.getAddressLabel());
console.log(jim.getAddressLabel());
