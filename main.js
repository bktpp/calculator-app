
//variables for buttons on calculator
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');

numbers.forEach(function(number) {
    number.addEventListener('click', function() {
        if(number.classList.contains('one')) {
            holdingArea += '1';
        } else if(number.classList.contains('two')) {
            holdingArea += '2';
        } else if(number.classList.contains('three')) {
            holdingArea += '3';
        } else if(number.classList.contains('plus')) {
            plusSwitch = true;
            parsingFunc();
        } else if(number.classList.contains('minus')) {
            minusSwitch = true;
            parsingFunc();
        } 
    })
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











