const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.input-display');
const keys = calculator.querySelector('.calculator-keys');

keys.addEventListener('click', event =>{
    const clicked = event.target;
    const clickedValue  = clicked.textContent;
    const displayValue = display.textContent;
    const {type} = clicked.dataset;
    const {previousKeyType} = calculator.dataset;

    if( type === 'clear'){
        display.textContent = '0';
    }
    
    if( type === 'number'){
        if(displayValue === '0'){
            display.textContent = clickedValue;
        }else if(previousKeyType === 'operator'){
            display.textContent = clickedValue;
        }else{
            display.textContent += clickedValue;
        }
    }

    if(type === 'dot'){
        if(displayValue === '0'){
            display.textContent = '0' + clickedValue;
        }else{
            display.textContent += clickedValue;
        }
    }

    if( type === 'operator'){
        const operatorKey = clicked.querySelectorAll('[data-type="operator"]');
        operatorKey.forEach(element => {element.dataset.state = ''})
        clicked.dataset.state = 'selected';

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = clicked.dataset.key;
    }

    if(type === 'equal') {
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue;

        display.textContent = calculate(firstNumber, operator, secondNumber);
        console.log(display.textContent);
    }

    calculator.dataset.previousKeyType = type;
});

function calculate(firstNumber, operator, secondNumber){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let result = '';
        
    switch(operator){
        case 'plus': result = firstNumber + secondNumber; break;
        case 'minus': result = firstNumber - secondNumber; break;
        case 'divide': result = firstNumber / secondNumber; break;
        case 'times': result = firstNumber * secondNumber; break;
    }
    return result;
}