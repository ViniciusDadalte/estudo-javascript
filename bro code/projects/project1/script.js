let content = document.getElementById('contentLabel');
Number(content);
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