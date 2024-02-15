const containerWidth = 960;
const gridSize = 16;

const squareSize = containerWidth / gridSize;

const squareDivs = document.querySelector('.squareDivs');
squareDivs.style.display = 'flex';
squareDivs.style.flexWrap = 'wrap';
squareDivs.style.width = `${containerWidth}px`;

for (let i = 0; i < gridSize * gridSize; i++) {
    let singleSquare = document.createElement('div');
    singleSquare.classList.add('singleSquare'); //This was the problem
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



