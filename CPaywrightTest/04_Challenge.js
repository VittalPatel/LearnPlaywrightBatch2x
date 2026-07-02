// Element Visibility Checker

function questionName(input) {
    // ADD YOUR CODE HERE
    // Destructure the expected boolean properties from the input object/array
    const [isPresent, isDisplayed, isEnabled] = input;

    let status = "";
    let action = "";

    // 1. Determine Status and Action using logical operators and strict equality
    if (isPresent === true && isDisplayed === true && isEnabled === true) {
        status = "READY";
        action = "Element is fully functional. Safe to proceed with interaction.";
    } else if (isPresent === true && isDisplayed === true && isEnabled === false) {
        status = "DISABLED";
        action = "Element is visible but disabled. Wait for enable state or check preconditions.";
    } else if (isPresent === true && isDisplayed === false) {
        status = "HIDDEN";
        action = "Element exists in DOM but is hidden. Scroll into view or check CSS styling properties.";
    } else {
        status = "NOT FOUND";
        action = "Element missing from DOM tree. Fix selector criteria or increase dynamic wait timeouts.";
    }

    // 2. Classify Severity using a nested ternary operator
    let severity = (status === "READY") ? "OK" :
        (status === "NOT FOUND") ? "CRITICAL" : "WARNING";

    // 3. Format the final output string exactly as expected
    let answer = `Status: ${status} Severity: ${severity} Action: ${action}`;

    return answer;
}