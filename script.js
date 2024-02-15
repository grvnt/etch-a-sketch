let gridSize;

do {
    gridSize = prompt("Enter a number less than 100");
    gridSize = Number(gridSize);
} while (gridSize > 100 || isNaN(gridSize) || gridSize <= 0);



const containerWidth = 960;

const squareSize = containerWidth / gridSize;

const squareDivs = document.querySelector('.squareDivs');
squareDivs.style.display = 'flex';
squareDivs.style.flexWrap = 'wrap';
squareDivs.style.width = `${containerWidth}px`;

for (let i = 0; i < gridSize * gridSize; i++) {
    let singleSquare = document.createElement('div');
    singleSquare.classList.add('singleSquare'); //Adding class solved the problem
    singleSquare.style.width = `${squareSize}px`;
    singleSquare.style.height = `${squareSize}px`;
    singleSquare.style.backgroundColor = "teal";
    
    squareDivs.appendChild(singleSquare);
}

//Event listener that changes color of square on mouse hover

const squares = document.querySelectorAll('.singleSquare');

function changeColor() {
    this.style.backgroundColor = "orange";
}

squares.forEach(square => {
    square.addEventListener('mouseover', changeColor);
});



