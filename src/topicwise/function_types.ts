// Function Types in TypeScript

// 1. Function Declaration
function add(x: number, y: number): number {
    return x + y;
}

// 2. Function Expression
let subtract: (x: number, y: number) => number = function (x, y) {
    return x - y;
};

// 3. Arrow Function
let multiply: (x: number, y: number) => number = (x, y) => x * y;

// 4. Optional Parameters
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

// 5. Default Parameters
function calculateArea(radius: number, pi: number = 3.14): number {
    return pi * radius ** 2;
}

// 6. Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// 7. Function Overloads
function display(value: string): void;
function display(value: number): void;
function display(value: string | number): void {
    console.log(value);
}

// 8. Generic Function
function identity<T>(arg: T): T {
    return arg;
}

// Example Function
function calculateCircleArea(radiusOrDiameter: number): number {
    if (radiusOrDiameter < 100) {
        // Example usage of generic function
        console.log("Identity:", identity(radiusOrDiameter));
        // Example usage of optional and default parameters
        return calculateArea(radiusOrDiameter);
    } else {
        // Example usage of function expression
        return subtract(100, radiusOrDiameter);
    }
}

// Example usage of the function
let areaFromRadius = calculateCircleArea(5);
let areaFromDiameter = calculateCircleArea(110);

console.log("Area from Radius:", areaFromRadius);
console.log("Area from Diameter:", areaFromDiameter);
