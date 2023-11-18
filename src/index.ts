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
