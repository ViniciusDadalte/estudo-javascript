const max = 1;
const min = 6;
let randomNum;

let number = document.getElementById('myH1');

function randomNumber() 
{
  randomNum = Math.floor(Math.random() * max) + min;
  number.innerHTML = `${randomNum}`;
}