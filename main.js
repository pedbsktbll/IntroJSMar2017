console.log("Hello, world");
console.log('Hello, world');
console.log('"Hello, world"');
console.log("'Hello, \"world'");

var x = "Hello";
console.log(x);
x=99;
console.log(x);

// primitives, like numbers
x = 1234.456; // x really IS a number
x = "Hello";
let y = "Hello"; // primitives compare with ===

// ONLY use === (not ==) for comparison (also use !==, but NOT !=)
console.log("x === y is " + (x === y));
y = "He";
y += "llo";
console.log("x === y is " + (x === y));

y = new String("Hello");
console.log(y);
x = new String("Hello");
console.log(x);
console.log("x === y is " + (x === y));

x = 99;
y = 99;
console.log("x === y is " + (x === y));

y = Number("99"); // convert String to primitive number
console.log("x === y is " + (x === y));

y = new Number("99"); // create OBJECT of Number type, from String initialization data
console.log("x === y is " + (x === y));

