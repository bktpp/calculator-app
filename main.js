
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
        // operatorands
        if (number.classList.contains('one')) {
            holdingArea += '1';
        } else if (number.classList.contains('two')) {
            holdingArea += '2';
        } else if (number.classList.contains('three')) {
            holdingArea += '3';
        } else if (number.classList.contains('four')) {
            holdingArea += '4';
        } else if (number.classList.contains('five')) {
            holdingArea += '5';
        } else if (number.classList.contains('six')) {
            holdingArea += '6';
        } else if (number.classList.contains('seven')) {
            holdingArea += '7';
        } else if (number.classList.contains('eight')) {
            holdingArea += '8';
        } else if (number.classList.contains('nine')) {
            holdingArea += '9';
        } else if (number.classList.contains('zero')) {
            holdingArea += '0';
        } 
        // operators
          else if (number.classList.contains('plus')) {
            plusSwitch = true;
            parsingFunc();
            numbersToAdd.push('+');
            console.log(numbersToAdd);
        } 
        
        else if(number.classList.contains('minus')) {
            minusSwitch = true;
            parsingFunc();
            numbersToAdd.push('-');
            console.log(numbersToAdd);
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
    let added = parseInt(holdingArea);
    numbersToAdd.push(added);
    holdingArea = '';
    added = '';
    calculate(numbersToAdd);
    console.log(calculate(numbersToAdd));
})

function calculate(equation) {
    let result;
    let operatorIndex = 1;
    if (typeof equation[0] === "number") {
      result = equation[0];
}   else if (isNaN(equation[0])) {
      console.log(NaN + " first iteration"); //will make pop up saying invalid format
}   else {
      return NaN; //will make pop up saying invalid format
}   for (let i = operatorIndex; i < equation.length; i += 2) {
        if (typeof equation[i] !== "string") {
            return NaN // possible pop up
        }
          switch (equation[i]) {
            case "+":
               if (typeof equation[i + 1] === "number") {
                   result += equation[i + 1];
               } else {
                   return NaN;
               }
               break;

           case "-":
               if (typeof equation[i + 1] === "number") {
                   result -= equation[i + 1];
               } else {
                   return NaN;
               }  
               break;
               default:
                return NaN;
}         
               
}
            return result;
}

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




















