let unknownValue: unknown = "hello";

if (typeof unknownValue === "string") {
    console.log("Hi");
}


let username: string;
let userId: number;

// Function annotations
function greet_q(name: string): string {
    return `Hello, ${name}!`;
}

// Arrow function annotations
const multiply = (a: number, b: number): number => a * b;

// Object annotations
let user: { name: string; age: number } = {
    name: "John",
    age: 30
};