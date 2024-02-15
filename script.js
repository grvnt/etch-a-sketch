

document.querySelector('#start').addEventListener('click', function () {
    
    const squareDivs = document.querySelector('.squareDivs');
    squareDivs.innerHTML = '';
    
    let gridSize;
    do {
        gridSize = prompt("Enter a number less than 100");
        gridSize = Number(gridSize);
    } while (gridSize > 100 || isNaN(gridSize) || gridSize <= 0);

    const containerWidth = 960;
    const squareSize = containerWidth / gridSize;

    squareDivs.style.display = 'flex';
    squareDivs.style.flexWrap = 'wrap';
    squareDivs.style.width = `${containerWidth}px`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let singleSquare = document.createElement('div');
        singleSquare.classList.add('singleSquare'); 
        singleSquare.style.width = `${squareSize}px`;
        singleSquare.style.height = `${squareSize}px`;
        singleSquare.style.backgroundColor = "teal";

        singleSquare.addEventListener('mouseover', function() {
            this.style.background = "orange";
        });
        
        squareDivs.appendChild(singleSquare);
    }

});







