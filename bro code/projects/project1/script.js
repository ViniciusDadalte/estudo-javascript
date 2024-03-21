let content = document.getElementById('contentLabel');
const count = 0;

function Decrease () 
{
  count--;
  content.innerHTML = count;
}

function Reset () 
{
  content.innerText = count;
}

function Increase () 
{
  count++;
  content.innerHTML = count;
}