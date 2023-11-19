// Array Types in TypeScript

// 1. Basic Array Type
let numbers: number[] = [1, 2, 3, 4, 5];

// 2. Array with Union Types
let mixedArray: (number | string)[] = [1, "two", 3, "four"];

// 3. Array with Generics
let numberArray: Array<number> = [1, 2, 3, 4, 5];

// 4. Tuple Types
let person: [string, number] = ["John", 25];

// 5. Readonly Tuple Types
let readonlyPerson: readonly [string, number] = ["John", 30];

// 6. The ReadonlyArray Type
let readonlyNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// Uncommenting the line below will result in a compilation error
// readonlyNumbers.push(6);

// 7. Array Destructuring
let colors: string[] = ["red", "green", "blue"];
let [firstColor, secondColor] = colors;

console.log(firstColor); // Output: red
console.log(secondColor); // Output: green

// 8. Array Methods with Typed Arrays
let numbersForMap: number[] = [1, 2, 3, 4, 5];
let squarednumber = numbersForMap.map((num) => num * num);

// 9. Readonly Arrays
let readonlyArray: readonly number[] = [1, 2, 3];

// Uncommenting the line below will result in a compilation error
// readonlyArray.push(4);

// Function that squares numbers in an array
function squareNumbers(numbers: number[]): number[] {
    return numbers.map((num) => num * num);
}

// Example usage of the function
let originalNumbers: number[] = [1, 2, 3, 4, 5];
let squaredNumbers: number[] = squareNumbers(originalNumbers);

console.log("Original Numbers:", originalNumbers);
console.log("Squared Numbers:", squaredNumbers);
