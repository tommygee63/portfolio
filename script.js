const menuButton = document.getElementById('menu')
const menuCloseButton = document.getElementById('close-button')
const menuBar = document.getElementById('menu-bar')
const overlay = document.getElementById('overlay')
//const skillDetail = document.getElementById('skills-details') //this needs to be get elements

const open = () => {
    menuBar.style.width = '400px';
    menuBar.style.height = '600px';
    menuBar.style.border = '1px solid black';
    overlay.style.display = 'block';
}

const close = () => {
    menuBar.style.width = '0';
    menuBar.style.height = '0';
    menuBar.style.border = '0';
    overlay.style.display = 'none';
}

const pointerChange = (event) => {
    event.target.style.cursor = 'pointer';
}

//changes cursor to pointer over menu open and close buttons and skill details
menuButton.addEventListener('mouseover', pointerChange)
menuCloseButton.addEventListener('mouseover', pointerChange)
//skillDetail.addEvenetListener('mouseover', pointerChange) //this needs to loop through an array of elements

//opens and hides the menu bar
menuButton.addEventListener('click', open)
menuCloseButton.addEventListener('click', close)