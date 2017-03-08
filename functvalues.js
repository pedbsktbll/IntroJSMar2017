function x() {
    console.log("This is x");
}

let y = x;

y();

let p = function() {
    console.log("another function");
};

p();

let obj = {
    moreStuff: function() {
        console.log("this is more stuff");
    }
};
obj.doStuff = p;

obj.doStuff();
obj.moreStuff();
