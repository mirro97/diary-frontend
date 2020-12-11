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

    if( type === 'operator'){
        const operatorKey = clicked.querySelectorAll('[data-type="operator"]');
        operatorKey.forEach(element => {element.dataset.state = ''})
        clicked.dataset.state = 'selected';
    }

    if(type === 'equal') {

    }

    calculator.dataset.previousKeyType = type;
});

// const output_value = document.getElementById('output-display');
// const input_value = document.getElementById('input-display');
// const value = document.querySelectorAll('.number');
// const operator = document.querySelectorAll('.operator');

// const empty = (element) =>{
//     element.innerText = "";
// };

// document.getElementById('claer').addEventListener('click', function(){
//     empty(output_value);
//     empty(input_value);
// });

// document.getElementById('claer').addEventListener('click', function(){
//     input_value.innerText = "";
// });

// document.getElementById('dot').addEventListener('click', function(){
//     if(input_value.innerText.includes('.')) return;

//     input_value.innerText += this.innerText;
// });

// for(var i = 0; i<value.length; i++) {
//     value[i].addEventListener('click', function(){
//         input_value.innerText += this.innerText;
//     });
// }

// for(var i = 0; i<operator.length; i++) {
//     operator[i].addEventListener('click', function(){
//         if (input_value.innerText !== "") {
//             if (output_value.innerText === "") {
//                 output_value.innerText = input_value.innerText + " " + this.innerText;
//             } else {
//                 output_value.innerText = output_value.innerText + " " + input_value.innerText + " " + this.innerText;
//             }
//         }
//         if (input_value.innerText === "" && output_value.innerText !== "") {
//             output_value.innerText = output_value.innerText.slice(0, -1) + " " + this.innerText;
//         }
//         empty(input_value);
//     });
// }

// document.getElementById('equal').addEventListener('click', function(){
//     if(input_value.innerText !== "") {
//         input_value.innerText = eval(output_value.innerText + input_value.innerText);
//         empty(output_value);
//     }
// });


