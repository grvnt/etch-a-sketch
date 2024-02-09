const containerWidth = 960;
const gridSize = 16;

const sqaureSize = containerWidth / gridSize;

const divSquares = document.querySelector('.squareDivs');
divSquares.style.display = 'flex';
divSquares.style.flexWrap = 'wrap';
divSquares.style.width = `${containerWidth}px`;

for (let i = 0; i < gridSize * gridSize; i++) {
    let singleSquare = document.createElement('div');
    singleSquare.style.width = `${sqaureSize}px`;
    singleSquare.style.height = `${sqaureSize}px`;
    singleSquare.style.backgroundColor = "teal";
    
    divSquares.appendChild(singleSquare);
}



