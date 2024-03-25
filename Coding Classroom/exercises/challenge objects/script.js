const mark = {
  nome: 'Mark Zuquerberg',
  massa: 78.90,
  altura: 1.8,
  calcBMI: function() {
    this.bmi = this.massa / this.altura ** 2;
    return this.bmi;
  }
};

const john = {
  nome: 'John Deacon',
  massa: 80,
  altura: 2.0,
  calcBMI: function() {
    this.bmi = this.massa / this.altura ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.calcBMI(), john.calcBMI());

if (mark.bmi > john.bmi) 
{
  console.log(`O ${mark.nome} tem o imc ${mark.bmi} que e maior doque o do ${john.nome} que tem o imc ${john.bmi}.`);
}
else 
{
  console.log(`O ${john.nome} tem o imc ${john.bmi} que e maior doque o do ${mark.nome} que tem o imc ${mark.bmi}.`);
}