let a = 10;
let b = 20;
let c = 15;

let max = (a > b)
            ? (a > c ? a : c)
            : (b > c ? b : c);

console.log("Maximum number is:", max);