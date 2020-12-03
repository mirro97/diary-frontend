const keys = document.querySelector(".calculator-keys");
const input = document.querySelector(".calculator-display");
const element = "";

document.querySelectorAll('.number').forEach((element)=> {
    element.addEventListener('click', (element) => {
        input.innerText += element.innerText;
        alert(input);
    });
});
