// Original product name with extra spaces
let productName = " wireless headphones PRO ";


// STEP 1: Trim extra spaces
let cleaned = productName.trim();


// STEP 2: Convert to lowercase
cleaned = cleaned.toLowerCase();


// STEP 3: Capitalize first letter of each word
// Using split → map → join
cleaned = cleaned
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");


// STEP 4: Replace "Pro" with "Pro Edition"
// Case-sensitive after capitalization
cleaned = cleaned.replace("Pro", "Pro Edition");


// STEP 5: Display cleaned title and its length
console.log("Cleaned Title:", cleaned);
console.log("Title Length:", cleaned.length);
