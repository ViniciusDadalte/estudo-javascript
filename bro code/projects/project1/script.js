let content = document.getElementById('contentLabel');
let count = 0;

function Decrease () 
{
  count--;
  content.innerHTML = count;
}

function Reset () 
{
  count = 0;
  content.innerText = count;
}

function Increase () 
{
  count++;
  content.innerHTML = count;
}