// ---------------------------------------------
// OLD callback version (given in question)
// ---------------------------------------------
// function fetchBugs(callback) {
//     setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

// ---------------------------------------------
// NEW Promise-based version
// ---------------------------------------------
function getBugs() {
    return new Promise((resolve, reject) => {
        console.log("Fetching bugs from server...");

        const apiFailed = Math.random() < 0.3; // 30% chance of failure

        setTimeout(() => {
            if (!apiFailed) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("API Error: Unable to fetch bugs!");
            }
        }, 1000);
    });
}

// ---------------------------------------------
// Calling the Promise-based function
// ---------------------------------------------
getBugs()
    .then((bugs) => {
        console.log("Bug list fetched successfully!");
        console.table(bugs);  // Neatly display bugs
    })
    .catch((error) => {
        console.error("❌ ERROR:", error);
    });
