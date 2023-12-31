//Global variables

const menuButton = document.getElementById('menu')
const menuCloseButton = document.getElementById('close-button')
const menuBar = document.getElementById('menu-bar')
const overlay = document.getElementById('overlay')
const accessibleInfo = document.getElementById('accessible-info')
const firstCatchInfo = document.getElementById('first-catch-info')
const accessible = document.getElementById('portfolio1')
const firstCatch = document.getElementById('portfolio2')
const forecast = document.getElementById('mixed-messages')
const forecastButton = document.getElementById('message-button')
const about = document.getElementById('about-link')
const skills = document.getElementById('skills-link')
const portfolio = document.getElementById('portfolio-link')
const contact = document.getElementById('contact-link')
const toTop = document.getElementById('to-top')


//Event functions
const open = () => {
    menuBar.style.width = '350px';
    menuBar.style.height = '500px';
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
    accessible.removeEventListener('click', displayAccessibleInfo);
    accessible.addEventListener('click', hideAccessibleInfo);
    document.getElementById('click-for-more-accessible').style.display = 'none';
}
const hideAccessibleInfo = () => {
    accessibleInfo.style.display = 'none';
    accessible.removeEventListener('click', hideAccessibleInfo);
    accessible.addEventListener('click', displayAccessibleInfo);
    document.getElementById('click-for-more-accessible').style.display = 'block';
}

const displayFirstCatchInfo = () => {
    firstCatchInfo.style.display = 'block';
    firstCatch.removeEventListener('click', displayFirstCatchInfo);
    firstCatch.addEventListener('click', hideFirstCatchInfo);
    document.getElementById('click-for-more-first').style.display = 'none';
}
const hideFirstCatchInfo = () => {
    firstCatchInfo.style.display = 'none';
    firstCatch.removeEventListener('click', hideFirstCatchInfo);
    firstCatch.addEventListener('click', displayFirstCatchInfo);
    document.getElementById('click-for-more-first').style.display = 'block';
}


//Event handlers 

//changes cursor to pointer over menu open and close buttons
menuButton.addEventListener('mouseover', pointerChange)
menuCloseButton.addEventListener('mouseover', pointerChange)


//opens and hides the menu bar
menuButton.addEventListener('click', open)
menuCloseButton.addEventListener('click', close)

about.addEventListener('click', close)
skills.addEventListener('click', close)
portfolio.addEventListener('click', close)
contact.addEventListener('click', close)

//show and hide porfolio info on click
accessible.addEventListener('click', displayAccessibleInfo)
firstCatch.addEventListener('click', displayFirstCatchInfo)

//hide portfolio info on click
//accessible.addEventListener('click', hideAccessibleInfo)
//firstCatch.addEventListener('click', hideFirstCatchInfo)


//mixed messages logic
const messageComponents = {
    swellSize: ['1ft', '2ft', '3ft', '4ft', '5ft', '6ft'],
    direction: ['North', 'South', 'East', 'West', 'North East', 'South East', 'South West', 'North West'],
    windStrength: ['light', 'moderate', 'strong']
};

const randomForecast = () => {
    let randSwell = messageComponents.swellSize[Math.floor(Math.random() * (messageComponents.swellSize.length))]
    let randDirection = messageComponents.direction[Math.floor(Math.random() * (messageComponents.direction.length))]
    let randWind = messageComponents.windStrength[Math.floor(Math.random() * (messageComponents.windStrength.length))]
    forecast.innerHTML = `There will be a ${randSwell} swell. <br> With a ${randWind} ${randDirection} wind!`
}

forecastButton.addEventListener('click', randomForecast)

