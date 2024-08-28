const gridContainer = document.querySelector('#gridContainer');

const newGridButton = document.querySelector('button');

let boxesOnSide = 16;

function enterBoxNum() {
    boxesOnSide = Math.round(prompt('Enter number of boxes per side', '1-100'));
    if (boxesOnSide > 100) {
        alert('That\'s too damn high');
        enterBoxNum();
    } else if (boxesOnSide < 1) {
        alert('Enter value above 0');
        enterBoxNum();
    } else if (boxesOnSide > 0 && boxesOnSide < 101) {
        gridContainer.textContent = '';
        newGrid(boxesOnSide)
    } else {
        alert('Not a number') 
        enterBoxNum()
    }
}

function newGrid(boxesOnSide) {
    for (let i = 0; i < boxesOnSide**2; i++) {
        let box = document.createElement('div');
        box.setAttribute('class', 'box');
        gridContainer.appendChild(box);
                
        boxDim = 920 / boxesOnSide;
        box.style.width = `${boxDim}px`;
        box.style.height = `${boxDim}px`;
        
        box.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'lightgreen';
        })

        box.addEventListener('mouseover', () => {
            event.target.style.filter += 'brightness(80%)';
        })
    }
}

function randomRGB() {
    let r = randomInteger
}

newGridButton.addEventListener('click', enterBoxNum)

window.addEventListener('load', newGrid(boxesOnSide))