
const textarea = document.getElementById("text-area");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("reset-btn");

const MAX_LIMIT = 100;

textarea.addEventListener("keydown", (event) => {
    const currentLength = textarea.value.length;

    
    if (currentLength >= MAX_LIMIT && 
        event.key.length === 1           
    ) {
        event.preventDefault();          
    }
});


textarea.addEventListener("input", () => {
    const remaining = MAX_LIMIT - textarea.value.length;

    counter.textContent = `${remaining} characters remaining`;


    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("yellow");
        counter.classList.remove("red");
    }

    else if (remaining === 0) {
        counter.classList.remove("yellow");
        counter.classList.add("red");
    }

    else {
        counter.classList.remove("yellow");
        counter.classList.remove("red");
    }
});


resetBtn.addEventListener("click", () => {
    textarea.value = "";
    counter.textContent = `${MAX_LIMIT} characters remaining`;
    counter.className = "";
});
