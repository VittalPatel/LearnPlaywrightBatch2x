// Bug Severity Classifier

function questionName(input) {
    // ADD YOUR CODE HERE
    // Destructure the two expected string inputs: frequency and impact
    const [frequency, impact] = input;

    let priority = "";
    let description = "";

    // Outer IF handles the Frequency classification
    if (frequency === "always") {
        // Inner IF handles Impact for the "always" tier
        if (impact === "blocker") {
            priority = "P0";
            description = "Critical: Stop release immediately";
        } else if (impact === "major") {
            priority = "P1";
            description = "High: Fix before release";
        } else if (impact === "minor") {
            priority = "P2";
            description = "Medium: Fix in next patch";
        }
    } else if (frequency === "often") {
        // Inner IF handles Impact for the "often" tier
        if (impact === "blocker") {
            priority = "P1";
            description = "High: Fix before release";
        } else if (impact === "major") {
            priority = "P2";
            description = "Medium: Fix in next patch";
        } else if (impact === "minor") {
            priority = "P3";
            description = "Low: Deferred";
        }
    } else if (frequency === "rarely") {
        // Inner IF handles Impact for the "rarely" tier
        if (impact === "blocker") {
            priority = "P2";
            description = "Medium: Fix in next patch";
        } else if (impact === "major") {
            priority = "P3";
            description = "Low: Deferred";
        } else if (impact === "minor") {
            priority = "P4";
            description = "Trivial: Backlog cosmetic issue";
        }
    } else {
        // Fallback for unhandled inputs
        priority = "UNKNOWN";
        description = "Unhandled classification criteria";
    }

    // Construct the formatted string exactly as shown in the expected output pattern
    let answer = `Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: ${priority} - ${description}`;

    return answer;
}