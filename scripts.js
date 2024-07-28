const container = document.querySelector('#container');
const containerProperties = window.getComputedStyle(container);
const CONTAINER_HEIGHT = containerProperties.getPropertyValue('height');
const CONTAINER_WIDTH = containerProperties.getPropertyValue('width');
const resetButton = document.querySelector('#reset');
const numSquares = document.querySelector('#numSquares');
const randomColor = document.querySelector('#randomColor');


resetButton.addEventListener("click", (e) => {
    let cells = document.querySelectorAll('.gridCell');
    for (const cell of cells) {
        cell.style.backgroundColor = 'lightgrey';
    }
});


function randColor() {
    cell.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(255)}`;
    }
        
function newGrid(rows, cols) {
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.classList.add('gridCell');
        cell.style.width = `calc(${CONTAINER_WIDTH} / ${cols})`;
        cell.style.height = `calc(${CONTAINER_HEIGHT} / ${rows})`;
        container.appendChild(cell);
        cell.addEventListener("mouseover", (e) => {
            cell.style.backgroundColor = "rgb(32, 32, 32)";
        });
    }
}

newGrid(16,16);

numSquares.addEventListener("click", (e) => {
    let newPixels = prompt("How many Pixels would you like to draw on?");
    if (newPixels <= 100) {
        let pixels = document.querySelectorAll('.gridCell')
        for (const pixel of pixels) {
            pixel.remove();
        }
    }
    else {
        alert("The number of pixels has to be lower than 100!");
    }
    newGrid(newPixels, newPixels);
});
