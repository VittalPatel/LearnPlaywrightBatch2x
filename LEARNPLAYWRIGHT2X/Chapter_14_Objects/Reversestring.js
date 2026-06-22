// // String reverse:

// let str = "Welcome";
// let reverse = "";

// for (let i = str.length-1;i>=0;i--) 
// { 
//      reverse += str.charAt(i); 
// }
// console.log(`Reverse of ${str}: ${reverse}`); 
// // outout: Reverse of Welcome: emocleW


function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    return reversed;
}

let words = ["JavaScript", "Madam", "Racecar", "OpenAI"];

for (let i = 0; i < words.length; i++) {
    console.log(words[i], "→", reverseString(words[i]));
}