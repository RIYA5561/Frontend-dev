// -------------------------------------------------------------
// E-Commerce Delivery Estimator
// This program calculates total order cost (including delivery fee)
// and delivery time depending on order amount, premium status,
// and whether the address is remote.
// -------------------------------------------------------------


// Sample Inputs (teacher/tester can change these values)
let orderAmount = 400; // numeric amount of the order
let isPremium = false; // true = premium member, false = normal user
let isRemote = true; // true = remote location, false = normal


// -------------------------------------------------------------
// Step 1: Determine delivery fee
// -------------------------------------------------------------
// Rule:
// • If orderAmount < 500 → delivery fee = ₹50
// • If user is premium → delivery fee is waived (0)


let deliveryFee = 0; // initialize


if (isPremium) {
// Premium members never pay delivery fee
deliveryFee = 0;
} else if (orderAmount < 500) {
// Non-premium + order below 500 → charge fee
deliveryFee = 50;
}


// -------------------------------------------------------------
// Step 2: Calculate total cost
// -------------------------------------------------------------
let totalCost = orderAmount + deliveryFee;


// -------------------------------------------------------------
// Step 3: Estimate delivery time
// -------------------------------------------------------------
// Rule:
// • Base delivery time = 3 days
// • If remote area → add 2 more days


let deliveryTime = 3; // base


if (isRemote) {
deliveryTime += 2; // add extra days for remote
}


// -------------------------------------------------------------
// Step 4: Print results to console
// -------------------------------------------------------------
console.log("Total Cost: ₹" + totalCost);
console.log("Estimated Delivery Time: " + deliveryTime + " days");