'use strict';

let BinarioADecimal = num => parseInt(num, 2);
/*  
function BinarioADecimal(num) {
  let binario = num.split('').reverse();
  let decimal = binario
  .map((b, index) => {
    return 2 ** index * Number(b);
  })
  .reduce((acc, curr) => acc + curr);
  return decimal; 
} */

let DecimalABinario = num => num.toString(2);
/*   
function DecimalABinario(num) {
  if (num === 0) return '0';
  let bin = [];
  while (num > 0) {
    bin.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  let res = bin.join('');
  return res; 
}
*/

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
