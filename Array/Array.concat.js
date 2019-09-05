Array.prototype.concat = function(...newArr) {
    let old = [...this];
    for (let arr of newArr) {
        if (Array.isArray(arr)) {
            for (let val of arr) {
                old.push(val);
            }
        }
        else {
            old.push(arr);
        }
    }
    return old;
}

let arr = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let num1 = [[1]];
let num2 = [2, [3]];
let num3 = [7, 8, 9];
num1[0].push(4);

let newArr = num1.concat(num2);
console.log(newArr);