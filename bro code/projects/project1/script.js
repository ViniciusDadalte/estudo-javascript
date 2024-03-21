let content = document.getElementById('contentLabel');
count = 0;

function Decrease () 
{
  content.innerHTML += count - 1;
}

function Reset () 
{
  content.innerHTML = count;
}

function Increase () 
{
  content.innerHTML += count + 1;
}