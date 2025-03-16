/* query container*/
const container = document.querySelector(".container");
let isDrawing = false;
// container.appendChild(square);
/* function 16x16 square divs */
function gridDivSize(size) {
// clear previous grid
    container.replaceChildren();
// dynamically calculate size based on container width
    const squareSize = container.clientWidth / size;

    for (let index = 0; index < size * size; index++) {
        const square = document.createElement("div");
        square.classList.add("square");

// set dynamic size for each square
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        // Hover Effect (Persistent when dragging)
     square.addEventListener('mouseover', () => {
        if (isDrawing) square.style.backgroundColor = 'black';
      });
  
      // Click to change color immediately
      square.addEventListener('mousedown', () => {
        square.style.backgroundColor = 'black';
      });
    container.appendChild(square);
    }


}
container.addEventListener('mousedown', () => (isDrawing = true));
container.addEventListener('mouseup', () => (isDrawing = false));

gridDivSize(16);
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let size = prompt("enter size x size of grid(max 100x100)", 16);
    size = Math.min(100, Math.max(1, size)); // ensure the size is within 1 100
    gridDivSize(size);
})
