// Original customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";


// STEP 1: Count words using split()
let wordCount = feedback.split(" ").length;


// STEP 2: Check for negative words using includes()
// Convert to lowercase to avoid case mismatch
let fbLower = feedback.toLowerCase();

let hasNegative = fbLower.includes("bad") || fbLower.includes("poor");


// STEP 3: Conditional feedback evaluation
if (hasNegative) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}


// STEP 4: Display word count
console.log("Word Count:", wordCount);
