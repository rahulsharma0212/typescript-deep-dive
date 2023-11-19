// typeof Type Operator in TypeScript

// 1. Basic Usage
let age: number = 25;

// typeof age is "number"
let ageType: typeof age = 30;

console.log("Age Type:", ageType); // Output: 30

// Uncommenting the line below will result in a compilation error
// ageType = "thirty";

// 2. Use Case: Function Return Type
function add_num(x: number, y: number): number {
    return x + y;
}

// typeof add is (x: number, y: number) => number
let addFunctionType: typeof add = (a, b) => a + b;

console.log("Add Function Type:", addFunctionType(10, 20)); // Output: 30

// Uncommenting the line below will result in a compilation error
// addFunctionType("ten", "twenty");

// 3. Use Case: Interface Type
interface IPerson {
    name: string;
    age: number;
}

let john: IPerson = { name: "John", age: 30 };

// typeof john is { name: string, age: number }
let johnType: typeof john = { name: "John", age: 31 };

console.log("John Type:", johnType); // Output: { name: 'John', age: 31 }

// Uncommenting the line below will result in a compilation error
// johnType = { name: "John", age: "thirty" };

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
