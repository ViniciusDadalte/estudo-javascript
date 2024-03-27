const calcTip = function (bill) 
{
  return bill >= 50 && bill <= 300 ? bill * 0.25 : bill * 0.2;
}

const bills = [25, 225, 176, 440, 46, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++)
{
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAvarge = function (arr)
{
  
}