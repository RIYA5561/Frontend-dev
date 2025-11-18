// ------------------------------------------------------
// Part 1: CALLBACK HELL (Nested Callbacks)
// ------------------------------------------------------

function design(callback) {
    setTimeout(() => {
        console.log("🎨 Designing UI...");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("🏗️ Building frontend...");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("🧪 Testing application...");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("🚀 Deploying to server...");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("🎉 Release successful! Team celebrating!");
        callback && callback();
    }, 1000);
}

// ----------------------
// CALLBACK HELL EXAMPLE
// ----------------------

console.log("\n=== CALLBACK HELL STARTED ===");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("=== CALLBACK HELL FINISHED ===\n");
                });
            });
        });
    });
});

// ------------------------------------------------------
// Part 2: ASYNC / AWAIT VERSION (Cleaner Flow)
// ------------------------------------------------------

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function designAsync() {
    await wait(1000);
    console.log("🎨 Designing UI...");
}

async function buildAsync() {
    await wait(1000);
    console.log("🏗️ Building frontend...");
}

async function testAsync() {
    await wait(1000);
    console.log("🧪 Testing application...");
}

async function deployAsync() {
    await wait(1000);
    console.log("🚀 Deploying to server...");
}

async function celebrateAsync() {
    await wait(1000);
    console.log("🎉 Release successful! Team celebrating!");
}

// ----------------------
// CLEAN ASYNC/AWAIT FLOW
// ----------------------

async function runPipeline() {
    console.log("\n=== ASYNC/AWAIT PIPELINE STARTED ===");

    await designAsync();
    await buildAsync();
    await testAsync();
    await deployAsync();
    await celebrateAsync();

    console.log("=== ASYNC/AWAIT PIPELINE FINISHED ===");
}

runPipeline();
