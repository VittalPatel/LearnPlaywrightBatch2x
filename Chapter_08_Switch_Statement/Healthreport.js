/**Problem: Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment) */
let percentage = 89.5;
if (percentage === 100) {
    console.log('✅Green Build');
} else if (percentage >= 90 && percentage < 100) {
    console.log('🟡 Stable — Investigate failures');
} else if (percentage >= 70 && percentage < 90) {
    console.log('😮 Unstable');
} else {
    console.log('🔴 Broken Build — Block deployment ');
}