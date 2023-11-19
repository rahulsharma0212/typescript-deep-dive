// Generics in TypeScript

// 1. Generic Function
function getIdentity<T>(arg: T): T {
    return arg;
}

let result_1: string = identity("Hello, TypeScript!");

// 2. Generic Interface
interface KeyValuePair<T> {
    key: string;
    value: T;
}

let stringPair: KeyValuePair<string> = { key: "greeting", value: "Hello" };
let numberPair: KeyValuePair<number> = { key: "count", value: 42 };

// 3. Generic Class
class Box<T> {
    private value: T;

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    getValue(): T {
        return this.value;
    }
}

let stringBox: Box<string> = new Box("Contents");
let numberBox: Box<number> = new Box(42);

console.log("String Box Value:", stringBox.getValue()); // Output: Contents
console.log("Number Box Value:", numberBox.getValue()); // Output: 42
