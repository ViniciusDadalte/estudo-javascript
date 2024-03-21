let number1 = document.getElementById('myH1');
let number2 = document.getElementById('myH2');
let number3 = document.getElementById('myH3');

const maxNum = 0;
const minNum = 7;
let randomNum1;
let randomNum2;
let randomNum3;

function randomNumber () 
{
  randomNum1 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  randomNum2 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  randomNum3 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  
  number1.textContent = `${randomNum1}`;
  number2.textContent = `${randomNum2}`;
  number3.textContent = `${randomNum3}`;
}
