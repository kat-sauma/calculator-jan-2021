// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM



const addOne = document.getElementById('add-number');
const addTwo = document.getElementById('add-another-number');
const addButton = document.getElementById('add-calculate');
const addResults = document.getElementById('add-results');

const subOne = document.getElementById('subtract-number');
const subTwo = document.getElementById('subtract-another-number');
const subButton = document.getElementById('subtract-calculate');
const subResults = document.getElementById('subtract-results');

const multOne = document.getElementById('multiply-number');
const multTwo = document.getElementById('multiply-another-number');
const multButton = document.getElementById('multiply-calculate');
const multResults = document.getElementById('multiply-results');

const divOne = document.getElementById('divide-number');
const divTwo = document.getElementById('divide-another-number');
const divButton = document.getElementById('divide-calculate');
const divResults = document.getElementById('divide-results');
// console.log('divButton');

addButton.addEventListener('click', () => {
    const addValue = Number(addOne.value);
    const addValue2 = Number(addTwo.value);

    const sum = addValue + addValue2;

    addResults.textContent = sum;
});

subButton.addEventListener('click', () => {
    const subValue = Number(subOne.value);
    const subValue2 = Number(subTwo.value);

    const difference = subValue - subValue2;

    subResults.textContent = difference;
});

multButton.addEventListener('click', () => {
    const multValue = Number(multOne.value);
    const multValue2 = Number(multTwo.value);

    const product = multValue * multValue2;

    multResults.textContent = product;
});

divButton.addEventListener('click', () => {
    const divValue = Number(divOne.value);
    const divValue2 = Number(divTwo.value);

    const quotient = divValue / divValue2;

    divResults.textContent = quotient;
});