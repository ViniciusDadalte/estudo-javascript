let content = document.getElementById('contentLabel');
count = 0;

function Decrease () 
{
  count--;
  content.innerHTML = count;
}

function Reset () 
{
  content.innerHTML = count;
}

function Increase () 
{
  count++;
  content.innerHTML = count;
}