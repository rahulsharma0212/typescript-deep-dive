// Object Types in TypeScript

// 1. Object Literal Type
let person_object: { name: string; age: number } = {
    name: "John",
    age: 30,
};

// 2. Optional Properties
let user: { id: number; username: string; email?: string } = {
    id: 1,
    username: "john_doe",
};

// 3. Readonly Properties
let config: { readonly server: string; readonly port: number } = {
    server: "localhost",
    port: 8080,
};

// 4. Index Signatures
let dictionary: { [key: string]: string } = {
    one: "first",
    two: "second",
};

// 5. Function as Property
let personWithMethod: {
    name: string;
    sayHello: () => void;
} = {
    name: "Alice",
    sayHello: () => {
        console.log("Hello!");
    },
};

// 6. Type Aliases
type Point = { x: number; y: number };

let point: Point = {
    x: 10,
    y: 20,
};

// 7. Intersection Types
type Colorful = { color: string };
type Circle = { radius: number };

let colorfulCircle: Colorful & Circle = {
    color: "red",
    radius: 10,
};

// 8. Union Types with Discriminated Unions
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "rectangle"; width: number; height: number };

function area(shape: Shape): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.width * shape.height;
    }
}

// Example usage
let circle: Shape = { kind: "circle", radius: 5 };
let rectangle: Shape = { kind: "rectangle", width: 4, height: 4 };

console.log("Circle Area:", area(circle));
console.log("Rectangle Area:", area(rectangle));
