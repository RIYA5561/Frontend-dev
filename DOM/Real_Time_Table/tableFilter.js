

const searchBox = document.getElementById("search");
const table = document.getElementById("student-table");
const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
const noResult = document.getElementById("no-result");


searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase().trim();
    let matchFound = false;

    for (let row of rows) {
        const rowText = row.textContent.toLowerCase(); 
        if (rowText.includes(query)) {
            row.style.display = "";  
            matchFound = true;
        } else {
            row.style.display = "none";  
        }
    }

    if (!matchFound) {
        noResult.classList.remove("hidden");
    } else {
        noResult.classList.add("hidden");
    }
});
