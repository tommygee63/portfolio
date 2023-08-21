const menuButton = document.getElementById('menu')
const menuCloseButton = document.getElementById('close-button')
const menuBar = document.getElementById('menu-bar')
const overlay = document.getElementById('overlay')
//const skillDetail = document.getElementById('skills-details') //this needs to be get elements
const accessibleInfo = document.getElementById('accessible-info')
const firstCatchInfo = document.getElementById('first-catch-info')
const accessible = document.getElementById('portfolio1')
const firstCatch = document.getElementById('portfolio2')
const forecast = document.getElementById('mixed-messages')
const forecastButton = document.getElementById('message-button')

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

const displayAccessibleInfo = () => {
    accessibleInfo.style.display = 'block';
}
const hideAccessibleInfo = () => {
    accessibleInfo.style.display = 'none';
}

const displayFirstCatchInfo = () => {
    firstCatchInfo.style.display = 'block';
}
const hideFirstCatchInfo = () => {
    firstCatchInfo.style.display = 'none';
}

//changes cursor to pointer over menu open and close buttons and skill details
menuButton.addEventListener('mouseover', pointerChange)
menuCloseButton.addEventListener('mouseover', pointerChange)
//skillDetail.addEvenetListener('mouseover', pointerChange) //this needs to loop through an array of elements

//opens and hides the menu bar
menuButton.addEventListener('click', open)
menuCloseButton.addEventListener('click', close)

//show porfolio info on mouse over
accessible.addEventListener('mouseenter', displayAccessibleInfo)
firstCatch.addEventListener('mouseenter', displayFirstCatchInfo)

//hide portfolio info on click
accessible.addEventListener('click', hideAccessibleInfo)
firstCatch.addEventListener('click', hideFirstCatchInfo)


//mixed messages logic
const messageComponents = {
    swellSize: ['1ft', '2ft', '3ft', '4ft', '5ft', '6ft'],
    direction: ['North', 'South', 'East', 'West', 'North East', 'South East', 'South West', 'North West'],
    windStrength: ['light', 'moderate', 'strong']
};



const randomForecast = () => {
    let randSwell = messageComponents.swellSize[Math.floor(Math.random() * (messageComponents.swellSize.length -1 ))]
    let randDirection = messageComponents.direction[Math.floor(Math.random() * (messageComponents.direction.length -1 ))]
    let randWind = messageComponents.windStrength[Math.floor(Math.random() * (messageComponents.windStrength.length -1 ))]
    forecast.innerHTML = `There will be a ${randSwell} swell. <br> With a ${randWind} ${randDirection} wind!`
}

forecastButton.addEventListener('click', randomForecast)

