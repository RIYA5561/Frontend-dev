
const body = document.body;


const lightBtn = document.getElementById("light-btn");
const darkBtn = document.getElementById("dark-btn");
const blueBtn = document.getElementById("blue-btn");

lightBtn.addEventListener("click", () => {
    body.setAttribute("data-theme", "light");
});

darkBtn.addEventListener("click", () => {
    body.setAttribute("data-theme", "dark");
});

blueBtn.addEventListener("click", () => {
    body.setAttribute("data-theme", "blue");
});
