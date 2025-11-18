// Utility function to create delay between 1–2 seconds
function waitRandomTime() {
    return Math.floor(Math.random() * 1000) + 1000; // 1000–2000ms
}

// Step 1: Boil Water
function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");

        setTimeout(() => {
            if (Math.random() < 0.8) {   // 80% success
                resolve("Water boiled");
            } else {
                reject("Failed to boil water!");
            }
        }, waitRandomTime());
    });
}

// Step 2: Brew Coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Brewing coffee...");

        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve("Coffee brewed");
            } else {
                reject("Coffee machine error!");
            }
        }, waitRandomTime());
    });
}

// Step 3: Pour Coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Pouring coffee into the cup...");

        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve("Coffee poured");
            } else {
                reject("Spilled the coffee!");
            }
        }, waitRandomTime());
    });
}

// =============================================
// Executing the entire process using PROMISE CHAINING
// =============================================
boilWater()
    .then((msg) => {
        console.log(msg);
        return brewCoffee();  // next step
    })
    .then((msg) => {
        console.log(msg);
        return pourCoffee();  // next step
    })
    .then((msg) => {
        console.log(msg);
        console.log("☕ Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("❌ PROCESS FAILED:", error);
    });
