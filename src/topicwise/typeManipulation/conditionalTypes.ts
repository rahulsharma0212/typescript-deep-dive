//  SomeType extends OtherType ? TrueType : FalseType;
interface IdLabel {
    id: number;
}

interface NameLabel {
    label: string;
}

type NameorId<T> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends string | number>(idOrName: T): NameorId<T> {
    throw "unimplement";
}

let a = createLabel("string");
let b = createLabel(12);
let c = createLabel(Math.random() > 0.5 ? 12 : "string");

/* Conditional Type Constraints */
// type MessageOf<T> = T["message"]; //Error :: Type '"message"' cannot be used to index type 'T'.
// 1st method
// type MessageOf<T extends { message: unknown }> = T["message"];

// 2nd method (conditional types)
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
interface Email {
    message: string;
}
interface Dog {
    bark(): void;
}
type EmailMessageContents = MessageOf<Email>;
type DogMessageContents = MessageOf<Dog>;

type flatten<T> = T extends any[] ? T[number] : T;
type str = flatten<string[]>;
type num = flatten<number>;

/* Inferring Within Conditional Types */
type flatten_infer<T> = T extends Array<infer Item> ? Item : T;
type str_infer = flatten_infer<string[]>;
type num_infer = flatten_infer<number>;

type getReturnType<Type> = Type extends (...args: never[]) => infer Return
    ? Return
    : never;

type num1 = getReturnType<() => number>;
type str1 = getReturnType<(a: number) => string>;
type bools = getReturnType<(a: number, b: string) => boolean>;

/* Distributive Conditional Types */
type ToArray<T> = T extends any ? T[] : never;
// If we plug a union type into ToArray, then the conditional type will be applied to each member of that union.
type StrArrOrNumArr = ToArray<string | number>;

type ToArray_Modified<T> = [T] extends [any] ? T[] : never;
type realUnionArray = ToArray_Modified<string | number>;
