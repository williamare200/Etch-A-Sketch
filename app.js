/* query container*/
const container = document.querySelector(".container");

// container.appendChild(square);
/* function 16x16 square divs */
function gridDivSize(size) {
    for (let index = 0; index < size * size; index++) {
        const square = document.createElement("div");
        // create class to focus styles css
        square.classList.add("square");
        container.appendChild(square);      
    }
}

gridDivSize(16)