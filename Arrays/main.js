var colors = ['red', 'blue', 'green', 'yellow', 'white', 'orange', 'black', 'cyan', 'brown'];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
colors.forEach(color => {
    console.log(color);
});

var numbers = [1,2,3,4,5]
rotateArrayToRight = steps => {
    for(var i =0; i < steps; i++) {
        var temp = numbers.pop();
        numbers.unshift(temp);
    }
}
rotateArrayToRight(2);
console.log([numbers]);
var reduced = 50 + numbers.reduce((a,b) => a+b);
console.log('reduce: ' + reduced);

(stepFunc = num => {
    var stepArray = [0];
    for(var i = 0; i < num - 1; i++){
        var temp = stepArray[i];
        stepArray.push(temp + 1);
    }
    console.log('stepFunc: '+ [...stepArray]);
    for(var i =0; i < stepArray.length; i++) {
        console.log('countdown from: ' + stepArray[i]);
        for(var j = 1; j <= stepArray[i]; j++) {
            console.log(stepArray[i] - j);
        }
    }
})(5)

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
];

zooInventory = Zoo => {
    console.log('List animals');
    for(var i = 0; i < myZoo.length; i++) {
        console.log(Zoo[i][0] + ' the ' + Zoo[i][1][0] + ' is ' + Zoo[i][1][1]);
    }
}

zooInventory(myZoo);