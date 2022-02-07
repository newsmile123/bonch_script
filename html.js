"use strict";
// const form = document.querySelector('form.add');
const input = document.querySelector('#login');
const password = document.querySelector('#password');
const btns = document.querySelector('button');
console.log(input);

let addInput = input.value;

input.addEventListener('change', (e) => {
    addInput = e.target.value;
    console.log(addInput);
});
console.log(addInput);

// console.log(form);







btns.addEventListener('click', (e) => {
    e.preventDefault();
});

var nameInput = 11111;
console.log(nameInput);
module.exports = {nameInput};

module.exports = {addInput};