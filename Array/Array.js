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