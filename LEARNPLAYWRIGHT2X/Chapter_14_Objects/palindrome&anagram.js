// Palindrome:
let str2 = String("Madam").toLowerCase();
let palindrome = "";

for (let i = str2.length -1; i >= 0 ; i--) 
{
    palindrome += str2.charAt(i);   
}

if(palindrome === str2){
    console.log(`${str2} is palindrome`);
}
else{
    console.log(`${str2} is not palindrome`);
}

// Anagram:
let s1 = "silent";
let s2 = "listen";

console.log(s1.split("")); // output: [ 's', 'i', 'l', 'e', 'n', 't' ]

if ( s1.split('').sort().join() === s2.split('').sort().join() )
{
    console.log('String is anagram')
}
else{
     console.log('String is not anagram');
}

// output: String is anagram