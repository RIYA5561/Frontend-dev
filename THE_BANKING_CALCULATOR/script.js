// --------------------------------------------------------------------
// Banking Interest Calculator
// Calculates final balance after a certain number of years based on:
// • Account Type (Savings or Fixed Deposit)
// • Deposit Amount
// • Applicable interest rate (including bonus interest over ₹1,00,000)
// Formula used:
// total = amount * Math.pow((1 + rate/100), years)
// --------------------------------------------------------------------


// Sample Inputs (change these while testing)
let accountType = "savings"; // "savings" or "fd"
let amount = 120000; // initial deposited amount
let years = 5; // number of years money is invested


// --------------------------------------------------------------------
// Step 1: Determine base interest rate based on account type
// --------------------------------------------------------------------
// Savings account → 4%
// Fixed deposit → 6.5%


let rate = 0; // initialize


if (accountType === "savings") {
rate = 4;
} else if (accountType === "fd") {
rate = 6.5;
} else {
console.log("Invalid account type!");
}


// --------------------------------------------------------------------
// Step 2: Add bonus interest if amount > ₹1,00,000
// --------------------------------------------------------------------
if (amount > 100000) {
rate += 1; // add 1% bonus
// Step 3: Calculate final amount using compound interest formula
// --------------------------------------------------------------------
// Formula:
// total = principal * (1 + rate/100)^years


let total = amount * Math.pow((1 + rate / 100), years);



console.log("Final Balance after " + years + " years: ₹" + total.toFixed(2));}