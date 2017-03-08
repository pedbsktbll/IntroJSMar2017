function doStuff() {
    console.log("in doStuff())");
    console.log("x is " + x);

    // BETTER to declare all vars at the top of the function
    var x = 99; // declaration is "hoisted" to the top of the function, but
    // the INITIALIZATION IS NOT

    console.log("x is " + x);
    console.log("exiting doStuff())");
}

function doOtherStuff() {
//    console.log("In doOtherStuff " + x);
    {
        let x = "Better";
        console.log("In doOtherStuff " + x);
    }
    console.log("In doOtherStuff " + x);
    z = 1000; // AAARRGGH wrote a global!!!!

}

var x = "Hello";
y = "Hello";
console.log("x is " + x + " y = " + y);

doStuff();
console.log("x is " + x + " y = " + y);

doOtherStuff();
console.log(z); // global, written in function!s

// JavaScript objects are NOT class based
// they are key value pairs, and we can write
// new items to them dynamically (by default)
let anObject = {};
anObject.value = 99;
console.log(anObject.value);

const otherObject = {};
//otherObject = "Hello"; // const prevents mutating the VARIABLE
otherObject.value = "Hello";
// const DOES NOT prevent mutation of the thing at the end of the reference.
console.log(otherObject.value); 

let t = {
    name: "Fred",
    count: 99
};

t.address = "Over here";
let field = "address";
console.log(t[field]);

t[field + " of second home"] = "Over the rainbow";
console.log(t["address of second home"]);

let today = new Date();

t[today] = "Wednesday";

for (let k in t) {
    console.log("k is " + k + " and has the value " + t[k]);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log(arr.length);
arr.push(99);
console.log(arr);
console.log(arr.length);
arr.address = "Over there";
console.log(arr);
console.log(arr.length);
console.log("----------------------------");
for (let k in arr) {
    console.log(k);
}

console.log("----------------------------");
arr.push(111);
for (let k in arr) {
    console.log(k);
}
console.log("arr[8]" + arr[8]);
console.log("arr[9]" + arr[9]);

arr[200] = 99999;
console.log(arr);
