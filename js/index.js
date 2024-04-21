//////Task 1
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}

document.querySelector('.change-color').addEventListener('click', changeColor);

function changeColor() {
    const randomColor = getRandomHexColor()
    document.body.style.background = randomColor
    document.querySelector('.color').textContent = randomColor;
}

////Task 2
