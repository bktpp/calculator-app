
//variables for buttons on calculator
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
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
    parsingFunc();
})

minus.addEventListener('click', function() {
    minusSwitch = true;
    parsingFunc();
})

function parsingFunc() {
    let added = parseInt(holdingArea);
    numbersToAdd.push(added);
    holdingArea = '';
    added = '';
  }; 


//master function for adding numbers selected by user returning answer
equals.addEventListener('click', function() {
    if(plusSwitch === true) {
    parsingFunc();
    addNum(...numbersToAdd);
    console.log(addNum(...numbersToAdd));
    plusSwitch = false;
    } else if(minusSwitch === true) {
    parsingFunc();
    minusNum(...numbersToAdd);
    console.log(minusNum(...numbersToAdd));
    minusSwitch = false;
    }
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

// after numbers are parsed and put in array, this function will subtract the integers
function minusNum(...subtract) {
    let sum = numbersToAdd[0];
    for (let i = 1; i < subtract.length; i++) {
        sum -= subtract[i];
    }
    return sum;
}











