"use strict";   // strict mode to avoid accidental globals

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },        // missing amount
    null              // null entry
];

// Arrays to store results
let validTransactions = [];
let invalidTransactions = [];

// Custom error classes
class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}

class MissingFieldError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingFieldError";
    }
}

class NullEntryError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullEntryError";
    }
}

function validateTransactions(list) {
    for (let tx of list) {
        try {
            // --------------------
            // BREAKPOINT
            // --------------------
            // Use this line while debugging in browser DevTools:
            // debugger;

            // 1. Check for null entries
            if (tx === null) {
                throw new NullEntryError("Transaction is null");
            }

            // 2. Check for missing id or amount
            if (!tx.id || tx.amount === undefined) {
                throw new MissingFieldError("Transaction has missing properties");
            }

            // 3. Check for negative transaction amounts
            if (tx.amount < 0) {
                throw new NegativeAmountError("Transaction amount cannot be negative");
            }

            // If no errors → valid transaction
            validTransactions.push(tx);

        } catch (error) {
            // Push all error-causing entries to invalid list
            invalidTransactions.push({
                errorType: error.name,
                message: error.message,
                transaction: tx
            });
        }
    }
}

// Run validation
validateTransactions(transactions);

// ----------------------------
// FINAL REPORT
// ----------------------------
console.log("\n===== VALID TRANSACTIONS =====");
console.log(validTransactions);
console.log("Total Valid:", validTransactions.length);

console.log("\n===== INVALID TRANSACTIONS =====");
console.log(invalidTransactions);
console.log("Total Invalid:", invalidTransactions.length);
