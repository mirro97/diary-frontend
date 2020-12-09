

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


