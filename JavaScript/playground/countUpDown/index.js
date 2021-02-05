const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.onclick = () => {
    // 10진수를 사용할것이기 때문에 10을 적음
    const current = parseInt(number.innerText, 10);
    number.innerText = current +1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current -1;
}
