// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { addClickHandler, subClickHandler, multClickHandler, divClickHandler } from './handlers.js';

const addButton = document.getElementById('add-calculate');
addButton.addEventListener('click', addClickHandler);

const subButton = document.getElementById('subtract-calculate');
subButton.addEventListener('click', subClickHandler);

const multButton = document.getElementById('multiply-calculate');
multButton.addEventListener('click', multClickHandler);

const divButton = document.getElementById('divide-calculate');
divButton.addEventListener('click', divClickHandler);