
//variables for buttons on calculator
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');

let numbersToAdd = [];
let holdingArea = '';
let plusSwitch = false;
let minusSwitch = false;
let clear = false;

console.log(numbersToAdd);

numbers.forEach(function(number) {
    number.addEventListener('click', function() {
        if (number.classList.contains('one')) {
            holdingArea += '1';
        } else if (number.classList.contains('two')) {
            holdingArea += '2';
        } else if (number.classList.contains('three')) {
            holdingArea += '3';
        } else if (number.classList.contains('plus')) {
            plusSwitch = true;
            if (holdingArea == '') {
            } else {
                parsingFunc();
            }
            
            console.log(numbersToAdd);
        } else if(number.classList.contains('minus')) {
            minusSwitch = true;
            parsingFunc();
        }
      })
    });

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
    let result = addNum(...numbersToAdd);
    console.log(addNum(...numbersToAdd));
    plusSwitch = false;
    numbersToAdd = [];
    numbersToAdd.push(result);
    } else if(minusSwitch === true) {
    parsingFunc();
    minusNum(...numbersToAdd);
    console.log(minusNum(...numbersToAdd));
    minusSwitch = false;
    }
})

//after numbers are parsed and put in array, this function will add the integers
function addNum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
        result = sum;
    }
    return result;
}

// after numbers are parsed and put in array, this function will subtract the integers
function minusNum(...subtract) {
    let sum = numbersToAdd[0];
    for (let i = 1; i < subtract.length; i++) {
        sum -= subtract[i];
    }
    return sum;
}


/* document.addEventListener('keydown', function(event) {
    if (event.code === 'Key1') {
        holdingArea += '1';
    } else if (event.code === 'Key2') {
        holdingArea += '2';
    } else if (event.code === 'Key3') {
        holdingArea += '3';
    } else if (event.code === 'NumpadAdd') {
        plusSwitch = true;
        parsingFunc();
    } else if (event.code === 'NumpadSubtract') {
        minusSwitch = true;
        parsingFunc();
    }
}); */ //need to revisit this for numberpad intergration  










