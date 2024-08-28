const gridContainer = document.querySelector('#gridContainer');

let boxesOnSide = 4;
let boxDim = 920 / boxesOnSide;

for (let i = 0; i < boxesOnSide**2; i++) {
    let box = document.createElement('div');
    box.setAttribute('class', 'box');
    gridContainer.appendChild(box);

    box.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'lightgreen';
    })

    box.style.width = `${boxDim}px`;
    box.style.height = `${boxDim}px`;
}