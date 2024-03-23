'use strict';

const media = (a,b,c) => (a + b + c) / 3;

let scoreEquipe1 = media(44, 23, 71);
let scoreEquipe2 = media(65, 54, 49);

const ganhador = function (avgEquipe1, avgEquipe2)
{
  if (avgEquipe1 => 2 * avgEquipe2)
  {
    console.log(`A equipe1 ganhou  ${avgEquipe1} vs. ${avgEquipe2}`);
  }
  else if(avgEquipe2 => 2 * avgEquipe1)
  {
    console.log(`A equipe2 ganhou  ${avgEquipe2} vs. ${avgEquipe1}`);
  }
  else 
  {
    console.log(`Nenhum time ganhou...`);
  }
}

ganhador(scoreEquipe1, scoreEquipe2)