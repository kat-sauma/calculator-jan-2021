// import from utils //
import { getSum, getDifference, getProduct, getQuotient } from './utils.js';

// addition  //
const addOne = document.getElementById('add-number');
const addTwo = document.getElementById('add-another-number');
const addResults = document.getElementById('add-results');
export function addClickHandler() {
    const addValue = Number(addOne.value);
    const addValue2 = Number(addTwo.value);
    const sum = getSum(addValue, addValue2);
    addResults.textContent = sum;
}

// subtractions // 
const subOne = document.getElementById('subtract-number');
const subTwo = document.getElementById('subtract-another-number');
const subResults = document.getElementById('subtract-results');
export function subClickHandler() {
    const subValue = Number(subOne.value);
    const subValue2 = Number(subTwo.value);
    const difference = getDifference(subValue, subValue2);
    subResults.textContent = difference;
}


// multiplication //
const multOne = document.getElementById('multiply-number');
const multTwo = document.getElementById('multiply-another-number');
const multResults = document.getElementById('multiply-results');
export function multClickHandler() {
    const multValue = Number(multOne.value);
    const multValue2 = Number(multTwo.value);
    const product = getProduct(multValue, multValue2);
    multResults.textContent = product;
}

// division  //
const divOne = document.getElementById('divide-number');
const divTwo = document.getElementById('divide-another-number');
const divResults = document.getElementById('divide-results');
export function divClickHandler() {
    const divValue = Number(divOne.value);
    const divValue2 = Number(divTwo.value);
    const quotient = getQuotient(divValue, divValue2);

    divResults.textContent = quotient;

}