// Primitive Types
let count: number = 42;
let message: string = "Hello, TypeScript!";
let isDone: boolean = true;
let undefinedValue: undefined = undefined;
let nullValue: null = null;
let bigIntValue: bigint = 100n;
let uniqueKey: symbol = Symbol("unique");
function logMessage(): void {
    console.log("This function does not return a value.");
}
// Union Types, Literal Types, and Enums in TypeScript

// 1. Union Types
let result: string | number;

result = "success";
console.log(result); // Output: success

result = 42;
console.log(result); // Output: 42

// 2. Literal Types
let status_: "success" | "error";

status_ = "success";
console.log(status_); // Output: success

status_ = "error";
console.log(status_); // Output: error

// 3. Enums
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let move: Direction;

move = Direction.Up;
console.log(move); // Output: 0

move = Direction.Right;
console.log(move); // Output: 3

// 4. Combining Union and Literal Types
type ResultType = "success" | "error";

function processResult(result: ResultType): void {
    if (result === "success") {
        console.log("Operation successful");
    } else {
        console.error("Operation failed");
    }
}

processResult("success"); // Output: Operation successful
processResult("error"); // Output: Operation failed
