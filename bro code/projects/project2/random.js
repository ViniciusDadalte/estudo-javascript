let number = document.getElementById('myH1');

const maxNum = 1;
const minNum = 6;
let randomNum;

function randomNumber () 
{
  randomNum = Math.floor(Math.random() * maxNum) + minNum;
  number.textContent = `${randomNum}`;
}
