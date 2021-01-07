// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM



const welcomeElement = document.getElementById('welcome');
welcomeElement.style.color = 'magenta';

const myButton = document.getElementById('who-loves-you');
const whateverTheUserWrote = document.getElementById('type-box');
const input = document.getElementById('type-box');

myButton.addEventListener ('click', () => {
    welcomeElement.textContent = whateverTheUserWrote.value;
    welcomeElement.style.background = 'yellow';

})