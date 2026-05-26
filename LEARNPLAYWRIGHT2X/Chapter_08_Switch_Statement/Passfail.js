/**Question 2 — Test Case Pass/Fail Verdict
Problem: Compare actual result with expected result and print test verdict. */

let expected = "Login Successful";
let actual = "Invalid Credentials";
if (actual === expected) {
    console.log(' ✅ Test Passed');
} else {
    console.log(' ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials');
}
//Output : ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials