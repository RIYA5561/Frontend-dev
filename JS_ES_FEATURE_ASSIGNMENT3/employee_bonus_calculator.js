"use strict";   // Strict mode enabled – no accidental global variables

// Employee Data
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

// Function to safely process employees
function processEmployees(data) {

    for (let emp of data) {
        try {
            // 1. Validate required properties
            if (!emp.name || !emp.salary || !emp.years) {
                throw new Error("Missing employee property");
            }

            // 2. Convert salary & years to numbers
            let salaryNum = Number(emp.salary);
            let yearsNum = Number(emp.years);

            if (isNaN(salaryNum) || isNaN(yearsNum)) {
                throw new Error("Invalid numeric conversion");
            }

            // 3. Calculate bonus
            let bonus =
                yearsNum > 3
                ? salaryNum * 0.10     // 10% bonus
                : salaryNum * 0.05;    // 5% bonus

            // 4. Print result using template strings
            console.log(`
------------------------------
Employee: ${emp.name}
Salary: ₹${salaryNum}
Years Worked: ${yearsNum}
Bonus Earned: ₹${bonus}
Total Salary + Bonus: ₹${salaryNum + bonus}
------------------------------
`);

        } catch (error) {
            // 5. Error Handling
            console.log(`Error processing employee "${emp.name}": ${error.message}`);
        }
    }
}

// Run the processor
processEmployees(employees);
