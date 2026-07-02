// Test Case Result Counter
// Write your solution here
function questionName(input) {
    // ADD YOUR CODE HERE
    let testResults = input;
    let totalTests = testResults.length;

    let passed = 0;
    let failed = 0;
    let skipped = 0;

    // 1. Loop through the array to count results
    for (let i = 0; i < totalTests; i++) {
        if (testResults[i] === "pass") {
            passed++;
        } else if (testResults[i] === "fail") {
            failed++;
        } else if (testResults[i] === "skip") {
            skipped++;
        }
    }

    // 2. Calculate the Pass Rate Percentage
    // Guard against division by zero if an empty array is provided
    let passRateNum = totalTests > 0 ? (passed / totalTests) * 100 : 0;
    let passRate = passRateNum.toFixed(2) + "%";

    // 3. Determine the Verdict based on failure count
    let verdict = "";
    if (failed === 0) {
        verdict = "All tests passed. Codebase is healthy and ready for release.";
    } else if (failed <= 2) {
        verdict = "Minor failures. Review before release.";
    } else {
        verdict = "Critical failures detected. Block release.";
    }

    // 4. Construct the precise string output required
    let answer = `Total Tests : ${totalTests} Passed: ${passed} Failed: ${failed} Skipped: ${skipped} Pass Rate: ${passRate} VERDICT: ${verdict}`;

    return answer;
}