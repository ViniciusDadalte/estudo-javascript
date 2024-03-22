let h2 = document.getElementById('myH2');
let h3 = document.getElementById('myH3');

function Media() 
{
    let nome = document.getElementById('inome').value;
    let nota1 = parseFloat(document.getElementById('inota1').value);
    let nota2 = parseFloat(document.getElementById('inota2').value);

    if (nome === '') {
        alert("Por favor, insira seu nome.");
        return; 
    }

    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Por favor, insira notas válidas (entre 0 e 10).");
        return;
    }

    let media = (nota1 + nota2  ) / 2;

    h2.innerHTML = `Olá ${nome} com as notas ${nota1} e ${nota2} sua <span id="importante">media é ${media}</span>`;

    if (media < 3)
    {
       h3.innerHTML = `Com media abaixo de 3,0 você esta <span id="notaBaixa">REPROVADO</span>`;
    }
    else if (media > 3 && media < 6)
    {
        h3.innerHTML = `Com media entre 3,0 e 6,0 você esta em <span id="notaMedia">RECUPERAÇÂO</span>`;
    }
    else 
    {
        h3.innerHTML = `Com media acima de 6,0 você esta <span id="notaAlta">APROVADO</span>`;
    }
}