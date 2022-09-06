//Create container to house grid of divs
const body = document.querySelector('body');
const containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'containerDiv');
body.appendChild(containerDiv);


//Generate the 16x16 grid of Divs
for (let i = 0; i < 256; i ++) {
    const gridDiv = document.createElement('div');
    gridDiv.setAttribute('class', 'gridDiv');
    containerDiv.appendChild(gridDiv);
}