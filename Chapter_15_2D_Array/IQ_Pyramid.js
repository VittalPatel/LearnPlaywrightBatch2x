// pyramid 

let n = 5;

for (let i = 1; i <= n; i++) {

    let row = "";

    // to print the Spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // to print the Underscores
    for (let k = 1; k <= (2 * i) - 1; k++) {
        row += "*";
    }

    console.log(row);
}