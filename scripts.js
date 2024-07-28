const container = document.querySelector('#container');
let PXS = 600;
let containerHeight = container.style.height;
let containerWidth = container.style.width;
const resetButton = document.querySelector('#reset');
const numSquares = document.querySelector('#numSquares');
const randomColor = document.querySelector('#randomColor');


resetButton.addEventListener("click", (e) => {
    let cells = document.querySelectorAll('.gridCell');
    for (const cell of cells) {
        cell.style.backgroundColor = 'lightgrey';
    }
});

/*         cell.style.width = `${(containerWidth / cols) - 2}px`
        cell.style.height = `${(containerHeight / rows) - 2}px`
        */


function randColor() {
    cell.style.backgroundColor = "rgb(32, 32,32)";
    randomColor.addEventListener(click, (e) => {
        cell.style.backgroundColor = '';
    })
}
        
function newGrid(rows, cols) {
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.classList.add('gridCell');
        container.appendChild(cell);
        cell.addEventListener("mouseover", (e) => {
            cell.style.backgroundColor = "rgb(32, 32, 32)";
        });
    }
}

newGrid(16, 16);

numSquares.addEventListener("click", (e) => {
    let newPixels = prompt("How many Pixels would you like to draw on?");
    let pixels = document.querySelectorAll('.gridCell')
    for (const pixel of pixels) {
        pixel.remove();
    }
    newGrid(newPixels, newPixels);
    let newPix = document.querySelector('.gridCell');
    newPix.style.height = `${(containerHeight / newPixels) - 2}px`;
    newPix.style.width =  `${(containerWidth / newPixels) - 2}px`;
});
