/* query container*/
const container = document.querySelector(".container");


/* function 16x16 square divs */
function divSquareGrid(size) {
    for (let index = 0; index < size * size; index++) {
        const square = document.createElement("div");
        container.appendChild(square);      
    }
}

divSquareGrid(16)