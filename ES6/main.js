//  only in ES5 through the help of object properties
//  and only in global context and not in a block scope
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
})
console.log(PI > 3.0);
//ES6
const PI2 = 3.141593
console.log(PI2 > 3.0);

//  only in ES5 with the help of block-scope emulating
//  function scopes and function expressions
(function () {
    var foo = function () { return 1; }
    console.log(foo() === 1);
    (function () {
        var foo = function () { return 2; }
        console.log(foo() === 2);
    })();
    console.log(foo() === 1);
})();

//ES6 function scopes
{
    function foo () { return 1 }
    console.log(foo() === 3);
    {
        function foo () { return 2 }
        console.log(foo() === 2);
    }
    console.log(foo() === 5);
}
evens = [2,4,6,8,10,12,14,16,18,20];

//ES5
var odds  = evens.map(function (v) { return v + 1; });
var pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
var nums  = evens.map(function (v, i) { return v + i; });
console.log(odds, pairs, nums)

//ES6 ARROW FUNC
odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)
console.log(odds, pairs, nums)

//ES5 PROMISE
function msgAfterTimeout (msg, who, timeout, onDone) {
    setTimeout(function () {
        onDone(msg + " Hello " + who + "!");
    }, timeout);
}
msgAfterTimeout("ES5", "Foo", 100, function (msg) {
    msgAfterTimeout(msg, "Bar", 200, function (msg) {
        console.log("done after 300ms:" + msg);
    });
});

//ES6 PROMISE
function msgAfterTimeoutES6 (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
msgAfterTimeoutES6("ES6", "Nenad", 100).then((msg) =>
    msgAfterTimeoutES6(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})