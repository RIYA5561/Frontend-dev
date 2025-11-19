

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalContent = document.getElementById("modal-content");


const thumbnails = document.querySelectorAll(".thumb");


thumbnails.forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src.replace("/200/200", "/600/600"); 
        modal.classList.remove("hidden");
    });
});


modal.addEventListener("click", () => {
    modal.classList.add("hidden");
});


modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
});
