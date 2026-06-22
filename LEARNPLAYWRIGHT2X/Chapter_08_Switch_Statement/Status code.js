/**Problem: Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid */
let code = 301;
if (code >= 200 && code <= 299) {
    console.log('Status : Success');
} else if (code >= 300 && code <= 399) {
    console.log('Status : Redirection');
} else if (code >= 400 && code <= 499) {
    console.log('Status : Client Error');
} else if (code >= 500 && code <= 599) {
    console.log('Status :Server Error ');
} else { console.log('Invalid code') }