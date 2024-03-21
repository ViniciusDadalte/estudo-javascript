const maxNum = 1;
const minNum = 6;
let randomNum;

let number = document.getElementById('myH1');

function randomNumber () 
{
  randomNum = Math.floor(Math.random() * maxNum) + minNum;
  number.textContent = `${randomNum}`;
}
