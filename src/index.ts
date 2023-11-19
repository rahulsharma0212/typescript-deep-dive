function sayHello(name: string): void {
    console.log(name);
}

sayHello("Rahul");

/* Typescript basic types */

// TOPIC:Boolean Type
let isDone: Boolean = false;

// TOPIC:Number Type
let decimal: number = 45;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// TOPIC:String Type
let color: string = "blue";
let sentence: string = `This color is ${color}`;

// TOPIC:Array Type
let list: number[] = [1, 2, 3];
let names: string[] = ["john", "doe"];
let numStrBool: Array<number | string | boolean> = [4, "4", true, 5, "string"];

// TOPIC:Tuple Type
let x: [string, number];
x = ["a", 1];
// x=[1,"a"]; // Error

// TOPIC:Enum Type
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Blue;

// TOPIC:Any Type
let notSure: any;
notSure = "string";
notSure = true;

// TOPIC:Void Type
function logMessage(name: string): void {
    console.log(`Hi ${name}`);
}
const arrowLogMessage = (name: string): void => {
    console.log(`Hi ${name}`);
};

// TOPIC:Null and Undefined Type
let u: undefined = undefined;
let n: null = null;

// TOPIC:Never Type
function error(message: string): never {
    throw new Error(message);
}

// TOPIC:Object Type
let obj: object = { key: "value" };

/* Type Annotations and Type Inference */
// TOPIC:Type Annotations
let myName: string = "Rahul";

// TOPIC:Type Inference
let myNameInference = "Rahul";

// TOPIC:Function Parameter Types
function add(x: number, y: number): number {
    return x + y; // return type is inferred
}

// TOPIC:Function return Type
function greet(name: string): string {
    return `Hello, ${name}`;
}

// TOPIC:Type Inference with Functions
function multiply(x: number, y: number) {
    return x * y; // TypeScript infers the return type as number.
}

// TOPIC:Object Type Annotation
let person: { name: string; age: number } = {
    name: "Rahul",
    age: 25,
};

// TOPIC:Arrays with Type Annotations
let number: number[] = [1, 2, 3, 4];

// Topic:Union Type Annotations
let id: string | number;
id = 25;
id = "ABC";

/* Interfaces and Type Aliases */

// TOPIC:Interface
interface IPerson {
    name: string;
    age: number;
    greet: (name: string) => string;
}

let person1: IPerson = {
    name: "Rahul",
    age: 25,
    greet: function (name: string): string {
        return `Hi, ${name}`;
    },
};

// TOPIC:Optional Properties
interface Car {
    brand: string;
    model?: string;
}

let myCar: Car = { brand: "MG" }; // model is optional

// TOPIC:Readonly Properties
interface Point {
    readonly x: number;
    readonly y: number;
}
let point: Point = { x: 25, y: 26 };
// point.x = 100; //Error: Cannot assign to 'x' because it is a read-only property.

// TOPIC:Function Types in Interfaces
interface MathFunction {
    (x: number, y: number): number;
}

let add1: MathFunction = function (x, y) {
    return x + y;
};

// TOPIC:Type Alias
type Age = number;

interface Person_type_alias {
    name: string;
    age: Age;
}

let person2: Person_type_alias = {
    name: "Rahul",
    age: 25,
};

// TOPIC:Intersection Types
interface IColor {
    color: string;
}

interface ICar {
    brand: string;
}

type RedCar = ICar & IColor;
let redCar: RedCar = {
    brand: "MG",
    color: "red",
};

/* Classes and Inheritance */
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log(`Some generic sound`);
    }
}
//Class Instances:
let cat = new Animal("Fluffy");
console.log(cat.name); // Output: Fluffy
cat.makeSound(); // Output: Some generic sound

// TOPIC:Inheritance
class Dog extends Animal {
    bark(): void {
        console.log(`Woff! Woff!`);
    }
}
let dog = new Dog("Buddy");
console.log(dog.name); // Output: Buddy
dog.makeSound(); // Output: Some generic sound
dog.bark(); // Output: Woff! Woff!

// TOPIC:Access Modifiers
// Use access modifiers (public, private, protected) to control the visibility of class
class BankAccount {
    private balance: number = 0;
    deposit(amount: number): void {
        this.balance += amount;
    }
    getBalance(): number {
        return this.balance;
    }
}

let account = new BankAccount();
account.deposit(100); // OK
// console.log(account.balance); // Error: Property 'balance' is private.

// TOPIC: Constructor Shorthand
// You can use access modifiers in the constructor parameters to automatically create and initialize
class Car_shortHand {
    constructor(public brand: string, public model: string) {}
}
let myCar1 = new Car_shortHand("Toyota", "Camry");
console.log(myCar.brand); // Output: Toyota

// TOPIC: Abstract Classes
// Abstract classes cannot be instantiated directly and are often used as base classes for other
abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

let circle = new Circle(5);
console.log(circle.calculateArea()); // Output: 78.54...

/* Modules and Namespaces */

// TOPIC:Modules
import { add_number, subtract_number } from "./math";
let result1 = add_number(2, 3);
let result2 = subtract_number(3, 2);
console.log(result1); // Output: 5
console.log(result2); // Output: 1

// TOPIC:Default Exports
import calculateArea from "./math";
let area = calculateArea(5);
console.log(area); // Output: 78.54..

// TOPIC:namespaces
// Namespaces help avoid naming collisions by grouping logically related code

/*
Use triple-slash directives (/// <reference path="..."/>) to tell TypeScript about the dependencies between files when not using modules.
*/

/// <reference path="shape.ts" />
let circle1 = new Shapes.Circle(5);
console.log(circle1.calculateArea()); // Output: 78.54..

/* Generics */
//TOPIC: Basic Generics
function identity<T>(arg: T): T {
    return arg;
}
let result_1 = identity("Hello, TypeScript!"); // result_1 is of type string
let result_2 = identity(42); // result_2 is of type number

//TOPIC: Generic Functions with Constraints
// Apply constraints to generics using the `extends` keyword
interface LengthWise {
    length: number;
}

function getLength<T extends LengthWise>(arg: T): number {
    return arg.length;
}
let strLength = getLength("Hello"); // OK
let arrayLength = getLength([1, 2, 3]); // OK
// let numLength = getLength(42); // Error: '42' does not have a property 'length'.

// TOPIC: Generic Classes
class Box<T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }
}
let numberBox = new Box<number>(42);
let stringBox = new Box<string>("string");

//Topic: Generic interface
interface Pair<T, U> {
    first: T;
    second: U;
}
let pair: Pair<number, string> = { first: 42, second: "string" };

//Topic:Generic Constraints with keyOf
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let person3 = { name: "john", age: 23 };
let name3 = getProperty(person3, "name"); //OK
// let invalidKey = getProperty(person, "address"); // Error: 'address' is not assignable to parameter of type 'name' | 'age'.

/* Asynchronous Programming with Promises */
//Topic: Promise Basics
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        //simulating asynchronous behaviour
        setTimeout(() => {
            let data = "Async Data";
            resolve(data);
        }, 1000);
    });
}

fetchData().then((result) => {
    console.log(result.toUpperCase());
});

// TOPIC: Chaining promises
function fetchUserData(): Promise<{ name: string; age: number }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "test", age: 24 });
        }, 1000);
    });
}
fetchData()
    .then((r) => {
        console.log(r);
        return fetchUserData();
    })
    .then((user) => {
        console.log(`User: ${user.name} , Age: ${user.age}`);
    });

// TOPIC: Handling Errors
function fetchDataWithError(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = new Error("Failed to fetch data");
            reject(error);
        }, 2000);
    });
}

fetchDataWithError().catch((error) => {
    console.error(error.message); // Output: Failed to fetch data
});

/* Asynchronous Programming with async/await */
// TOPIC: using async function
async function fetchDataAndLog(): Promise<void> {
    const result = await fetchData();
    console.log(result); // Output: Async data with async/await
}
fetchDataAndLog();

// TOPIC:Handling Errors with try/catch
async function fetchDataWithErrorAsync(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = new Error("Failed to fetch data with async/await");
            reject(error);
        }, 2000);
    });
}

async function handleAsyncError(): Promise<void> {
    try {
        const result = await fetchDataWithErrorAsync();
        console.log(result);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message); // Output: Failed to fetch data with async/await
        }
    }
}

handleAsyncError();

// TOPIC: Parallel Execution with Promise.all
async function fetchData1(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from source 1");
        }, 2000);
    });
}

async function fetchData2(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from source 2");
        }, 1500);
    });
}

async function fetchDataFromMultipleSources(): Promise<void> {
    const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log(result1); // Output: Data from source 1
    console.log(result2); // Output: Data from source 2
}

fetchDataFromMultipleSources();

/* Advanced TypeScript Topics */
// TOPIC: Mapped Types
type Flags = { option1: boolean; option2: boolean };
type NullableFlags = { [T in keyof Flags]: boolean | null };
// Result: { option1: boolean | null, option2: boolean | null }

// Topic: Conditional Types
type NonNullable<T> = T extends null | undefined ? never : T;
type SomeType = string | null;

// Result: string
type ResultType = NonNullable<SomeType>;

// TOPIC:Declaration Merging
interface User {
    name: string;
}

interface User {
    age: number;
}

// Result: { name: string, age: number }
const user: User = { name: "John", age: 25 };
