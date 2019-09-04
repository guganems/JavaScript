class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
}