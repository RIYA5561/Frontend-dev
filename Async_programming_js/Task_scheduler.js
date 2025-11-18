// ---------------------------------------------
// Q2 – Demonstrating JavaScript Task Ordering
// Microtasks vs Macrotasks
// ---------------------------------------------

console.log("Start");       // Synchronous task 1

setTimeout(() => {          // Macrotask
    console.log("Timeout callback (Macrotask)");
}, 0);

Promise.resolve().then(() => {  // Microtask
    console.log("Promise.then callback (Microtask)");
});

console.log("End");         // Synchronous task 2


/* 
------------------------------------------------------------
📌 WHY DOES PROMISE (MICROTASK) RUN BEFORE setTimeout (MACROTASK)?
------------------------------------------------------------

JavaScript Event Loop prioritizes tasks in this order:

1️⃣ **Synchronous code**  
   Runs immediately (e.g., "Start" and "End").

2️⃣ **Microtasks**  
   Includes:
   - Promise.then()
   - queueMicrotask()
   - MutationObserver callbacks  
   Microtasks run **right after** synchronous code finishes,
   BEFORE the event loop moves to the macrotask queue.

3️⃣ **Macrotasks**
   Includes:
   - setTimeout
   - setInterval
   - I/O callbacks
   - setImmediate (Node)
   Macrotasks are executed only after all microtasks are done.

Therefore:
✔ Promise.then() runs BEFORE  
✔ setTimeout() callback runs AFTER microtasks finish.

EXPECTED ORDER:
1. Start
2. End
3. Promise.then callback (Microtask)
4. Timeout callback (Macrotask)
------------------------------------------------------------
*/
