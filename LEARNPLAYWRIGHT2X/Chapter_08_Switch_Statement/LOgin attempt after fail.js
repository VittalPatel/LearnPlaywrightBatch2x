/** Login Lockout After Failed Attempts
Problem: Track failed login attempts. Lock the account after 3 failed attempts.
Sample Input/Output:
Input: attempts = 2
Output: 1 attempt left before lockout
Input: attempts = 3
Output: 🔒 Account Locked — Contact support
Input: attempts = 0
Output: Login successful */
let attempt = -1;
if (attempt === 0) {
    console.log('Login successful');
} else if (attempt === 1) {
    console.log(' 2 attempt left before lockout');
} else if (attempt === 2) {
    console.log(' 1 attempt left before lockout');
} else if (attempt >= 3) {
    console.log('🔒 Account Locked — Contact support');

} else {
    // This handles accidental negative numbers just in case
    console.log('Invalid attempt count')
}