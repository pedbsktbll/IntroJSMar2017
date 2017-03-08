function f(argOne, argTwo) {
    if (argOne === undefined) argOne = "Default for argOne";
    argTwo = argTwo || "A default for arg Two....";
    console.log("argOne is " + argOne);
    console.log("argTwo is " + argTwo);
    
    console.log("called with " + arguments.length + " arguments");
    for (let idx = 0; idx < arguments.length; idx++) {
        console.log(idx + " : " + arguments[idx]);
    }
    console.log("-----------------------------------");
}

f("Hello", "Goodbye");
f("Hello");
f("Hello", "Goodbye", "Have a nice day");
f();
f(0, 0);
f(0, "");

function newerFn(first, ...args) {
    console.log("first is " + first);
    for (let x of args) {
        console.log("> " + x);
    }
    console.log("---------------------");
}

newerFn();
newerFn("Hello");
newerFn("H", "I", "J");

function moreNew(first = 99, second = "hello") {
    console.log("first " + first);
    console.log("second " + second);
    console.log("-------------------");
}

moreNew();
moreNew("Fred");
moreNew(undefined,"Jim");
moreNew("Fred", "Jim", "Sheila");

let inner = [4, 5, 6];
let outer = [1, 2, 3, ...inner, 7, 8, 9];
console.log(outer);
console.log("------------------");

moreNew(...inner);
console.log("------------------");

let [p, q, , , s, t] = outer;
console.log(p);
console.log(q);
console.log(s);
console.log(t);