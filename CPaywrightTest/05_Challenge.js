// Test Data Generator

function questionName(input) {
    // ADD YOUR CODE HERE
    // const: For fixed arrays and configurations that will not change
    const ROLES = ["admin", "editor", "viewer", "tester", "manager"];
    const TOTAL_USERS = 8;
    const DOMAIN = "@testingacademy.com";

    // var: For a global counter/result collector outside the block scope
    var generatedRecords = [];

    // let: For loop counters and block-scoped variables unique to each iteration
    for (let i = 1; i <= TOTAL_USERS; i++) {
        // 1. Generate zero-padded ID (e.g., USR-0001)
        let paddedId = "USR-" + String(i).padStart(4, "0");

        // 2. Dynamic generation of names and emails based on index
        let name = `TestUser_${i}`;
        let email = `testuser${i}${DOMAIN}`;

        // 3. Cycle through roles array using modulo operator (%)
        let roleIndex = (i - 1) % ROLES.length;
        let role = ROLES[roleIndex];

        // 4. Determine status (every 3rd user is INACTIVE)
        let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

        // 5. Construct the string record for this user
        let userRecord = `${paddedId} | ${name} | ${email} | ${role} | ${status}`;

        generatedRecords.push(userRecord);
    }

    // Combine individual user rows separating them with spaces as per output specification
    let answer = generatedRecords.join(" ");
    return answer;
}