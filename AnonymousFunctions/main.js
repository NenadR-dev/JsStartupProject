var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var anonFunc = function(a) { return Math.pow(a,2); }
var squareArray = [];
array.forEach(element => {
    squareArray.push(anonFunc(element));
});

timesTwo = number => {
    return number * 2;
}

console.log('map func: ' + array.map((a) => {return Math.pow(a,2)}));
console.log('anon func: '+ [...squareArray]);

(function(a,b) {
    var c = a + b;
    console.log('sum: '+ c );
})(5,2);

console.log("TimesTwo arrow func: " + timesTwo(5));