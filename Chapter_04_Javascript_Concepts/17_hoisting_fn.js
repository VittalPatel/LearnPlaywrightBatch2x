

function getUserStatus() { // JS Engine
    //var status_code; JS Engine (optimized the code)
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

getUserStatus();





// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.
var a;
console.log(a);
a = 10;

console.log(b);
let b = 20;

console.log(c);
const c = 30;

  console.log(x);
  let x = 5;

  console.log(a); // Output: undefined

 var a = 10; 

console.log(a); // Output: 10 