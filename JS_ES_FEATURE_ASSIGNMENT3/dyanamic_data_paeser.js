// Mixed API Data
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store valid and invalid numeric data
let validNumbers = [];
let invalidNumbers = [];

// Function to check if a value is a valid number
function isValidNumber(value) {
    let num = Number(value);
    return !isNaN(num) && value !== " " && value !== "" && value !== "100px";
}

// PROCESS EACH VALUE
for (let item of apiData) {

    // Convert to Number, Boolean, String
    let numValue = Number(item);
    let boolValue = Boolean(item);
    let strValue = String(item);

    // Print conversion report for each value
    console.log("Original:", item,
                "| Number:", numValue,
                "| Boolean:", boolValue,
                "| String:", strValue);

    // Validate numeric data
    if (isValidNumber(item)) {
        validNumbers.push(numValue);
    } else {
        invalidNumbers.push(item);
    }
}

// PRINT FINAL REPORT
console.log("\n===== FINAL REPORT =====");

// Valid numeric values
console.log("Valid Numeric Data:", validNumbers);

// Invalid entries
console.log("Invalid Numeric Data:", invalidNumbers);
