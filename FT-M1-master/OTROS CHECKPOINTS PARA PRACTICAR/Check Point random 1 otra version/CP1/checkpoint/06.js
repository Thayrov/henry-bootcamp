//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
//
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCIÓN ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si número dentro del array no es primo, retornar false

const sortPrimeHouses = array => {
  const isPrime = n => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };
  const quickSort = arr => {
    if (arr.length <= 1) return arr;
    const [pivot, ...rest] = arr;
    const left = [];
    const right = [];
    for (const elem of rest) {
      elem < pivot ? left.push(elem) : right.push(elem);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  for (let i = 0; i < array.length; i++) {
    if (!isPrime(array[i])) return false;
  }
  return quickSort(array);
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses,
};
