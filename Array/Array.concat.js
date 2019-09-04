Array.prototype.concat = function(...newArr) {
    let old = [...this];
    for (let arr of newArr) {
        for (let val of arr) {
            old.push(val);
        }
    }
    return old;
}

let arr = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let num3 = [7, 8, 9];

let newArr = arr.concat(arr2);
console.log(newArr);