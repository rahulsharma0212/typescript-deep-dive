// keyof Type Operator in TypeScript

// 1. Basic Usage
type Person = {
    name: string;
    age: number;
    address: string;
};

// keyof Person is "name" | "age" | "address"
let personKey: keyof Person = "name";
console.log("Person Key:", personKey); // Output: name

// Uncommenting the line below will result in a compilation error
// personKey = "gender";

// 2. Index Access
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let person_obj: Person = { name: "John", age: 30, address: "123 Main St" };
let nameValue: string = getProperty(person_obj, "name");
let ageValue: number = getProperty(person_obj, "age");

console.log("Name:", nameValue); // Output: John
console.log("Age:", ageValue); // Output: 30

// Uncommenting the line below will result in a compilation error
// let invalidKeyAccess = getProperty(person, "gender");

// 3. Use Case: Dynamic Property Access
type Configuration = {
    server: {
        host: string;
        port: number;
    };
    database: {
        url: string;
        username: string;
        password: string;
    };
};

function getConfigValue<T extends keyof Configuration>(
    config: Configuration,
    key: T
): Configuration[T] {
    return config[key];
}

let serverHost: string = getConfigValue(
    {
        server: { host: "localhost", port: 8080 },
        database: { url: "", username: "", password: "" },
    },
    "server"
).host;

console.log("Server Host:", serverHost); // Output: localhost

//If the type has a string or number index signature, keyof will return those types instead:
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
