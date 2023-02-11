
//variables for buttons on calculator
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');

let numbersToAdd = [];
let holdingArea = '';
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
        } else if (number.classList.contains('decimal')) {
            holdingArea += '.';
        
        // operators
        }  else if (number.classList.contains('plus')) {
            parsingFunc();
            numbersToAdd.push('+');
        }  else if (number.classList.contains('minus')) {
            parsingFunc();
            numbersToAdd.push('-');
        }  else if (number.classList.contains('divide')) {
            parsingFunc();
            numbersToAdd.push('/');
        }  else if (number.classList.contains('multiply')) {
            parsingFunc();
            numbersToAdd.push('*');
            console.log(numbersToAdd);
        }  else if (number.classList.contains('clear')) {
            numbersToAdd = [];
            holdingArea = '';
            added = '';
            console.log(numbersToAdd);
        }
      })
    });

function parsingFunc() {
    let added = parseFloat(holdingArea);
    numbersToAdd.push(added);
    holdingArea = '';
    added = '';
  }; 

//master function for adding numbers selected by user returning answer
equals.addEventListener('click', function() {
    let added = parseFloat(holdingArea);
    numbersToAdd.push(added);
    holdingArea = '';
    added = '';
    calculate(numbersToAdd);
    console.log(calculate(numbersToAdd));
    console.log(numbersToAdd);
})

function calculate(equation) {
    let result;
    let operatorIndex = 1;
    if (typeof equation[0] === "number") {
      result = equation[0];
    } else if (isNaN(equation[0])) {
      console.log(NaN + " first iteration");
    } else {
      return NaN;
    }
    for (let i = operatorIndex; i < equation.length; i += 2) {
      if (typeof equation[i] !== "string") {
        return NaN;
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
        case "*":
          if (typeof equation[i + 1] === "number") {
            result *= equation[i + 1];
            result = result.toFixed(2);
          } else {
            return NaN;
          }  
          break;
        case "/":
          if (typeof equation[i + 1] === "number") {
            result /= equation[i + 1];
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
  


















