// We can use an indexed access type to look up a specific property on another type:
type Person_type = { age: number; name: string; alive: boolean };
type Age = Person_type["age"];

type I1 = Person_type["age" | "name"];

type I2 = Person_type[keyof Person_type];

type AliveOrName = "alive" | "name";

type I3 = Person_type[AliveOrName];

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];

type Person_1 = (typeof MyArray)[number];
type age_1 = (typeof MyArray)[number]["age"];
// or
type age_2 = Person_1["age"];

type key = "age";

type age_3 = (typeof MyArray)[number][key];
