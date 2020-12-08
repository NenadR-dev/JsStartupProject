var person = new Object();
person.firstName = 'nenad';
person.lastName = 'radulovic';
person.age = 24;

var jsonPerson = JSON.stringify(person);
console.log('JS object: ' + person);
console.log('Json object: ' + jsonPerson);
console.log('Json parse object: ' + JSON.parse(jsonPerson));

var numbers = new Object();
numbers.array = [1,2,3,4,5,6,7,8,9];

var jsonNumbers = JSON.stringify(numbers);
var parsedNumbers = JSON.parse(jsonNumbers).array;
console.log("Parsed:");
parsedNumbers.forEach(num => {
    console.log(num);
});