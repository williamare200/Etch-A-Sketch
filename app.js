/* query container*/
const container = document.querySelector(".container");
let isDrawing = false;
// container.appendChild(square);
/* function 16x16 square divs */
function gridDivSize(size) {
    for (let index = 0; index < size * size; index++) {
        const square = document.createElement("div");
        square.classList.add("square");
        // Hover Effect (Persistent when dragging)
     square.addEventListener('mouseover', () => {
        if (isDrawing) square.style.backgroundColor = 'darkblue';
      });
  
      // Click to change color immediately
      square.addEventListener('mousedown', () => {
        square.style.backgroundColor = 'darkblue';
      });
    container.appendChild(square);
    }


}
container.addEventListener('mousedown', () => (isDrawing = true));
container.addEventListener('mouseup', () => (isDrawing = false));
gridDivSize(16)


