// Anagram Program with Command Line Arguments

// Function to check if two strings are anagrams
function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase
  const cleaned1 = str1.replace(/\s/g, '').toLowerCase();
  const cleaned2 = str2.replace(/\s/g, '').toLowerCase();
  
  // Check if lengths are equal
  if (cleaned1.length !== cleaned2.length) {
    return false;
  }
  
  // Count characters in first string
  const count = {};
  for (let char of cleaned1) {
    count[char] = (count[char] || 0) + 1;
  }
  
  // Subtract characters from second string
  for (let char of cleaned2) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  
  return true;
}

// Main Logic
console.log("=== Anagram Checker Program ===\n");

// Get command line arguments
const args = process.argv.slice(2);

if (args.length < 2) {
  // Default test cases if no arguments provided
  console.log("Usage: node anagramp.js <string1> <string2>\n");
  console.log("Running default test cases...\n");
  
  const testCases = [
    ["listen", "silent"],
    ["evil", "vile"],
    ["dormitory", "dirty room"],
    ["anagram", "nagaram"],
    ["hello", "world"],
    ["race", "care"],
    ["abc", "def"],
    ["astronomer", "moon starer"]
  ];
  
  testCases.forEach(([str1, str2]) => {
    const result = isAnagram(str1, str2);
    console.log(`"${str1}" & "${str2}" => ${result ? "✓ ANAGRAM" : "✗ NOT ANAGRAM"}`);
  });
} else {
  // Check user-provided strings
  const string1 = args[0];
  const string2 = args[1];
  
  const result = isAnagram(string1, string2);
  
  console.log(`String 1: "${string1}"`);
  console.log(`String 2: "${string2}"`);
  console.log(`\nResult: ${result ? "✓ THEY ARE ANAGRAMS" : "✗ NOT ANAGRAMS"}`);
}
