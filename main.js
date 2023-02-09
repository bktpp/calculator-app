
//variables for buttons on calculator
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const plus = document.querySelector('.plus');
const equals = document.querySelector('.equals');

one.addEventListener('click', function() {
    holdingArea += '1';
})

two.addEventListener('click', function() {
    holdingArea += '2';
})

three.addEventListener('click', function() {
    holdingArea += '3';
})

plus.addEventListener('click', function() {
    plusSwitch = true;
    let added = parseInt(holdingArea);
    numbersToAdd.push(added);
    holdingArea = '';
    added = '';
})

//master function for adding numbers selected by user returning answer
equals.addEventListener('click', function() {
    if(plusSwitch === true) {
    let added = parseInt(holdingArea);
    numbersToAdd.push(added);
    holdingArea = '';
    added = '';
    addNum(...numbersToAdd);
    plusSwitch = true;
    } else if(minusSwitch === true) {

    }
    console.log(addNum(...numbersToAdd));
})

let numbersToAdd = [];
let holdingArea = '';
let plusSwitch = false;
let minusSwitch = false;

//after numbers are parsed and put in array, this function will add the integers
function addNum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}


function minusNum(...minus) {
    let sum = 0;
    for (let i = 0; i < minus.length; i++) {
        sum -= minus[i];
    }
    console.log(sum);
}
// function for subtracting numbers










