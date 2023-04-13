const board = document.querySelector('#board')
const colors = ['r#4ba4bf','#4b7bbf', '#5e4bbf', '#744bbf', '#8b4bbf', '#ac4bbf', '#bf4ba8', '#bf4b94']
const SQUARES_NUMBER = 1600


for ( let i = 0; i < SQUARES_NUMBER; i++){
        const square = document.createElement('div')
        square.classList.add('square')

        square.addEventListener('mouseover',  setColor)

        square.addEventListener('mouseleave',  removeColor)

        board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = ` 0 0 2px #000`
}


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
