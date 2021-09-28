const board = document.querySelector('#board')
const colors = ['orangeRed', 'tomato', 'coral', 'lightSaimon', 'darkOrange', 'orange']

const SQUARES_NUMBER = 1050

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeElement(square))
    square.addEventListener('mouseup', () => setElement(square))


    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()

    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeElement(element) {
    element.style.transform = 'scale(0, 0)'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)

    return colors[index]
}

function setElement(element) {
    if (element.style.transform = 'scale(0, 0)') {
        element.style.transform = 'scale(1, 1)'
        element.style.backgroundColor = 'rgb(68, 38, 27)'
        element.style.boxShadow = `0 0 2px #000`
    }
}