'use strict';

function cutPiecesFruit (fruit) 
{
  return fruit * 4;
}

function fruitProcesser (apple, orange)
{
  const appleNum = cutPiecesFruit(apple);
  const orangeNum = cutPiecesFruit(orange);
  
  const juice = `juice with ${appleNum} pieces apple and ${orangeNum} pieces orange`
  return juice;
}

console.log(fruitProcesser(2,3))