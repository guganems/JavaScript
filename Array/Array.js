// Create an Array
var fruits = ['Apple', 'Banana'];

// console.log(fruits);


// Access an Array item
var first = fruits[0];

var last = fruits[fruits.length-1];


// loop over an array
fruits.forEach(function(item, index, array) {
    // console.log(item, index);
});


// Add to the end of an Array
var newLength = fruits.push('Orange');


// Remove from the end of an Array
var last = fruits.pop();


// Remove from the front of an Array
var first = fruits.shift();


// Add to the front of an Array
var newLength = fruits.unshift('Strawberry');


// Find the index of an item in the Array
fruits.push('Mango');

var pos = fruits.indexOf('Banana');


// Remove an item by index position
var removedItem = fruits.splice(pos, 1);


// Remove items from an index position
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
// console.log(vegetables);

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n);

// console.log(vegetables);

// console.log(removedItems);


// Copy an Array
var shallowCopy = fruits.slice();


// Accessing array elements
var arr = ['this is the first element', 'this is the second element', 'this is the third element'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[arr.length-1]);

var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
// console.log(years[0]);

// console.log(years['2'] != years['02']);

var promise = {
    'var' : 'text',
    'array' : [1, 2, 3, 4]
};

// console.log(promise['var']);


// Relationship between length and numerical properties
var fruits = [];
fruits.push('banana', 'apple', 'peach');

// console.log(fruits.length);

fruits[5] = 'mango';
console.log(fruits[5]);
console.log(Object.keys(fruits));
console.log(fruits.length);