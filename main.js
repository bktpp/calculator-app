
//variables for buttons on calculator
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');
const numberBar = document.querySelector('.number-bar');
const answer = document.querySelector('.answer');

let numbersToAdd = [];
let holdingArea = '';
let clear = false;
let masterClear = true;
console.log(numbersToAdd);

numbers.forEach(function(number) {
    number.addEventListener('click', function() {
        // operands
        if (number.classList.contains('one')) {
            holdingArea += '1';
            numberBar.textContent += '1';
        } else if (number.classList.contains('two')) {
            holdingArea += '2';
            numberBar.textContent += '2';
        } else if (number.classList.contains('three')) {
            holdingArea += '3';
            numberBar.textContent += '3';
        } else if (number.classList.contains('four')) {
            holdingArea += '4';
            numberBar.textContent += '4';
        } else if (number.classList.contains('five')) {
            holdingArea += '5';
            numberBar.textContent += '5';
        } else if (number.classList.contains('six')) {
            holdingArea += '6';
            numberBar.textContent += '6';
        } else if (number.classList.contains('seven')) {
            holdingArea += '7';
            numberBar.textContent += '7';
        } else if (number.classList.contains('eight')) {
            holdingArea += '8';
            numberBar.textContent += '8';
        } else if (number.classList.contains('nine')) {
            holdingArea += '9';
            numberBar.textContent += '9';
        } else if (number.classList.contains('zero')) {
            holdingArea += '0';
            numberBar.textContent += '0';
        } else if (number.classList.contains('decimal')) {
            holdingArea += '.';
            numberBar.textContent += '.';
      }   else if (number.classList.contains('percent')) {
              
              answer.textContent += 'percent deez nutz';
          }
        
        // operators
          else if (number.classList.contains('plus')) {
            if (clear === true) {
              parsingFunc();
              numbersToAdd.push('+');
              numberBar.textContent += '+';
              clear = false;
             } else {
              numberBar.textContent = '';
              numberBar.textContent += calculate(numbersToAdd);
              numberBar.textContent += '+';
              answer.textContent = '';
              numbersToAdd.push('+');
            }  
        }  else if (number.classList.contains('minus')) {
          if (clear === true) {
            parsingFunc();
            numbersToAdd.push('-');
            numberBar.textContent += '-';
            clear = false;
           } else {
            numberBar.textContent = '';
            numberBar.textContent += calculate(numbersToAdd);
            numberBar.textContent += '-';
            answer.textContent = '';
            numbersToAdd.push('-');
          } 
        }  else if (number.classList.contains('divide')) {
          if (clear === true) {
            parsingFunc();
            numbersToAdd.push('/');
            numberBar.textContent += '/';
            clear = false;
           } else {
            numberBar.textContent = '';
            numberBar.textContent += calculate(numbersToAdd);
            numberBar.textContent += '/';
            answer.textContent = '';
            numbersToAdd.push('/');
          } 
        }  else if (number.classList.contains('multiply')) {
          if (clear === true) {
            parsingFunc();
            numbersToAdd.push('*');
            numberBar.textContent += '*';
            clear = false;
           } else {
            numberBar.textContent = '';
            numberBar.textContent += calculate(numbersToAdd);
            numberBar.textContent += '*';
            answer.textContent = '';
            numbersToAdd.push('*');
          } 
            console.log(numbersToAdd);
        }  else if (number.classList.contains('clear')) {
            numbersToAdd = [];
            holdingArea = '';
            added = '';
            numberBar.textContent = '';
            answer.textContent = '';
            clear = true;
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
    clear = false;
    answer.textContent = calculate(numbersToAdd);
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
    let resultStr = result.toString();
    numbersToAdd.push(resultStr);
    return result;
  }
  


















