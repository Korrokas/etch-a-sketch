//Create container to house grid of divs
const body = document.querySelector('body');
const containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'containerDiv');
body.appendChild(containerDiv);


//Function to generate a grid
function generateGrid(num) {
    for (let i = 0; i < Math.pow(num, 2); i ++) {
        const gridDiv = document.createElement('div');
        gridDiv.setAttribute('class', 'gridDiv');
        containerDiv.appendChild(gridDiv);
    }
    containerDiv.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}


//Create an event listener for hover when entering div
function createEventsForGrid() {
    const boxesInGrid = document.querySelectorAll('.gridDiv');

    for (let i = 0; i < boxesInGrid.length; i++) {
        boxesInGrid[i].addEventListener('mouseenter', changeColor);
    }
}


//Function for removing old grid
function removeOldGrid() {
    const removeGrid = document.querySelectorAll('.gridDiv');

    for (let i = 0; i < removeGrid.length; i++) {
        removeGrid[i].remove();
    }
}


//Function for changing colors
function changeColor() {
    const colorValues = randomColor();
    this.style['background-color'] = `rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]})`;
}

function randomColor() {
    const rgbA = Math.floor(Math.random() * 256) + 1;
    const rgbB = Math.floor(Math.random() * 256) + 1;
    const rgbC = Math.floor(Math.random() * 256) + 1;
    const threeRandomColors = [rgbA, rgbB, rgbC];
    return threeRandomColors;
}

//Button that prompts user for # of squares maximum 100, generate in same total space
const newGridBtn = document.querySelector('#newGridBtn');
newGridBtn.addEventListener('click', newGrid);

function newGrid() {
    const numberOfSquares = prompt("Please enter how many squares for new Etch-a-Sketch: (100 or less)");
    if (numberOfSquares === null) {
        return;
    }
    else if (numberOfSquares > 100 || numberOfSquares < 1) {
        alert("invalid number, please resubmit: ");
        newGrid();
    }
    else {
        removeOldGrid();
        generateGrid(numberOfSquares);
        createEventsForGrid();
    }
}



generateGrid(16);
createEventsForGrid();