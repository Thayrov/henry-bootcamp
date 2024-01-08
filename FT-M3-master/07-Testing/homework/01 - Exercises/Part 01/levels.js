const levelOne = (a, b) => {
  return a + b;
};

const levelTwo = letras => {
  if (letras.length < 2) return letras;
  if (letras.length === 2) return letras[0];
  let letrasImpar = [];
  for (let i = 0; i < letras.length; i += 2) {
    letrasImpar.push(letras[i]);
  }
  return letrasImpar.join('');
};

const levelThree = (a, b) => {
  return [...a, ...b].sort((a, b) => a - b);
};

const levelFour = num => {
  let sum = num
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b);
  let reverse = parseInt(sum.toString().split('').reverse().join(''));
  return sum * reverse === num;
};

module.exports = {levelOne, levelTwo, levelThree, levelFour};
