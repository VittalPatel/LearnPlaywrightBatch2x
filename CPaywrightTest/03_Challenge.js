// Retry Failed API Call

function questionName(input) {
    // ADD YOUR CODE HERE
    const MAX_ATTEMPTS = 5;
    let attempts = 0;
    let isSuccess = false;
    let logHistory = "";

    // Mocking Math.random to make the simulation deterministic if the platform overrides it
    // Otherwise, standard Math.random() is used.
    do {
        attempts++;

        // Simulate a 40% chance of success (random value > 0.6)
        let randomValue = Math.random();

        if (randomValue > 0.6) {
            isSuccess = true;
            logHistory += `Attempt ${attempts}: ✅ SUCCESS (Response 200 OK) `;
        } else {
            logHistory += `Attempt ${attempts}: ❌ FAILED (Timeout/Error) `;
        }

    } while (!isSuccess && attempts < MAX_ATTEMPTS);

    // Determine final outcome summary
    let summary = "";
    if (isSuccess) {
        summary = `API call PASSED after ${attempts} attempt(s).`;
    } else {
        summary = `API call FAILED completely after reaching MAX_ATTEMPTS (${MAX_ATTEMPTS}).`;
    }

    // Construct final answer matching the expected format
    let answer = `${logHistory.trim()} ${summary}`;
    return answer;
}