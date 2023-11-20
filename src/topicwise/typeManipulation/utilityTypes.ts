/* Awaited<Type> */
type A_ = Awaited<Promise<string>>;
type B_ = Awaited<Promise<Promise<number>>>;
type C_ = Awaited<boolean | Promise<number>>;

/* Partial<Type> */
interface Todo {
    title: string;
    description: string;
}
type PartialTodo = Partial<Todo>;

/* Required<Type> */
interface Props {
    a?: string;
    b?: number;
}
type RequiredProps = Required<Props>;

/* Readonly<Type> */
interface Book {
    title: string;
}
type ReadonlyBook = Readonly<Book>;

const book: ReadonlyBook = {
    title: "The Alchemist",
};
// book.title = "update book ";

/* Record<Keys, Type> */
interface CatInfo {
    age: number;
    breed: string;
}
type CatName = "miffy" | "boris" | "mordred";
type Cat = Record<CatName, CatInfo>;
const cats: Cat = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};

/* Pick<Type, Keys> */
interface Todo2 {
    title: string;
    description: string;
    completed: boolean;
}
type TodoPreview = Pick<Todo2, "title" | "completed">;

/* Omit<Type, Keys> */
interface Todo3 {
    title: string;
    description: string;
    completed: boolean;
}
type TodoPreview2 = Omit<Todo3, "description">;

/* Exclude<UnionType, ExcludedMembers> */
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>;
type Shapes =
    | { kind: "circle"; radius: number }
    | { kind: "square"; x: number }
    | { kind: "triangle"; x: number; y: number };
type T3 = Exclude<Shapes, { kind: "circle" }>;

/* Extract<Type, Union> */
type T4 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T5 = Extract<Shapes, { kind: "circle" }>;

/* NonNullable<Type> */
type T6 = NonNullable<string | number | undefined | null>;

/* Parameters<Type> */
declare function f1(arg: { a: number; b: string }): void;
type T7 = Parameters<() => string>;
type T8 = Parameters<(s: string) => void>;
type T9 = Parameters<<T>(arg: T) => T>;
type T10 = Parameters<typeof f1>;
type T11 = Parameters<any>;
type T12 = Parameters<never>;

/* ConstructorParameters<Type> */
type T13 = ConstructorParameters<ErrorConstructor>;
type T14 = ConstructorParameters<FunctionConstructor>;
type T15 = ConstructorParameters<RegExpConstructor>;
class C {
    constructor(a: number, b: string) {}
}
type T16 = ConstructorParameters<typeof C>;

/* ReturnType<Type> */
declare function f2(): { a: number; b: string };
type T17 = ReturnType<() => string>;
type T18 = ReturnType<(s: string) => void>;
type T19 = ReturnType<<T>() => T>;
type T20 = ReturnType<typeof f2>;
type T21 = ReturnType<any>;
type T22 = ReturnType<never>;

/* InstanceType<Type> */
type T23 = InstanceType<typeof C>;
