"use strict";

let myObj = {
    name: "Fred",
    address: "Over there",
    showAddress: function () {
        x = 99;
        console.log(this.name + " lives " + this.address);
//        console.log(name + " lives " + address);
    }
};

var x = "hello";
myObj.showAddress();
console.log("x is " + x);