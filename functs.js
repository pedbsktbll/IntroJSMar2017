function f(argOne, argTwo) {
    if (argOne === undefined) argOne = "Default for argOne";
    argTwo = argTwo || "A default for arg Two....";
    console.log("argOne is " + argOne);
    console.log("argTwo is " + argTwo);
}

f("Hello", "Goodbye");
f("Hello");
f("Hello", "Goodbye", "Have a nice day");
f();
f(0, 0);
f(0, "");

