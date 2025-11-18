// GLOBAL SCOPE
// Declaring a global variable 'bonus'
let bonus = 5000;  // Global bonus available everywhere

// Function to calculate salary
function calculateSalary(isPermanent) {

    // LOCAL SCOPE
    let salary = 40000;   // Local variable inside function

    // Check employee type
    if (isPermanent === true) {
        salary = salary + bonus;  // using global 'bonus'
    }

    // Print total salary
    console.log("Salary with conditions:", salary);

    // Demonstrate scope difference
    // Changing local variable does NOT affect global bonus
    let bonus = 1000;  // This creates a NEW local variable, does NOT change global bonus
    console.log("Local bonus inside function:", bonus);
}

// Calling function with permanent employee
console.log("Global bonus before function call:", bonus);
calculateSalary(true);

// Calling again with a non-permanent employee
console.log("Global bonus remains unchanged:", bonus);
calculateSalary(false);

// Final global bonus check
console.log("Global bonus after all calls:", bonus);
