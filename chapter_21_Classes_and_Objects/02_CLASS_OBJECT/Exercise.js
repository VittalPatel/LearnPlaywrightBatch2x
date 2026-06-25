/*You need to create a class with the name of Calculator where 
you will have different methods available for some subtraction,
modulus, division, and multiplication. What will 
happen is you will basically create an object with the 
two variables. You will basically give the output of some 
subtraction, modulus, division, and multiplication. */

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    modulus() {
        return this.num1 % this.num2;
    }

    divide() {
        return this.num1 / this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }
}
const calculate = new Calculator(10, 5);
console.log("Addition:", calculate.add());
console.log("Subtraction:", calculate.subtract());
console.log("Modulus:", calculate.modulus());
console.log("Division:", calculate.divide());
console.log("Multiplication:", calculate.multiply());


/*You need to create a class with the static and non-static 
methods as well as variables. It will be a simple class of our 
Playwright 2x batch. You will be also printing out the students.
Create 10 objects of students and print them. Also create a
print method. Also sahi baasai. */

class playwright2xBatch {
    static batchName = "Playwright 2x";

    constructor(studentName, studentAge) {
        this.studentName = studentName;
        this.studentAge = studentAge;
    }
    // Non-Static Method
    print() {
        console.log("Student Name:", this.studentName);
        console.log("Student Age:", this.studentAge);
    }
    
    // Static Method
    static printBatch() {
        console.log("Batch Name =", playwright2xBatch.batchName);
    }
}   
const student1 = new playwright2xBatch("Satish", 25);
const student2 = new playwright2xBatch("Priya", 30);
const student3 = new playwright2xBatch("Chetan", 28);  
const student4 = new playwright2xBatch("Divya", 26);
const student5 = new playwright2xBatch("Raj", 29);
const student6 = new playwright2xBatch("Neha", 27);
const student7 = new playwright2xBatch("Suresh", 31);
const student8 = new playwright2xBatch("Pooja", 24);
const student9 = new playwright2xBatch("Vikram", 32);
const student10 = new playwright2xBatch("Simran", 23);

student1.print();
student2.print();
student3.print();
student4.print();
student5.print();
student6.print();
student7.print();
student8.print();
student9.print();
student10.print();

