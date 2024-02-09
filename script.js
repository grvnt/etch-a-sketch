const divSquares = document.querySelector('.squareDivs');
let singleSquare = document.createElement('div');

singleSquare.style.width = "100px";
singleSquare.style.height = "100px";
singleSquare.style.backgroundColor = "green";

for (let i = 0; i < 16; i++) {
    divSquares.appendChild(singleSquare.cloneNode(true));
}

let flexContainer = document.querySelector('div');
flexContainer.style.display = 'flex';
flexContainer.style.flexWrap = 'wrap';

