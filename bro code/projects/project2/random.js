let number = document.getElementById('myH1');

const maxNum = 0;
const minNum = 7;
let randomNum;

function randomNumber () 
{
  randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  number.textContent = `${randomNum}`;
}
