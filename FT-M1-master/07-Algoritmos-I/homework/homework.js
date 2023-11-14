'use strict';
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let factores = [1]; // Inicializamos un array con el número 1 como su primer elemento.
  let divisor = 2; // Comienza la factorización con el primer número primo, 2.

  // Mientras el número sea mayor que 1, buscamos factores primos.
  while (num > 1) {
    // Si el número es divisible por el divisor,
    if (num % divisor == 0) {
      factores.push(divisor); // añade el divisor al array de factores
      num /= divisor; // y divide el número por este divisor.
    } else {
      divisor++; // Si no es divisible, incrementa el divisor.
    }
  }

  return factores; // Devuelve el array de factores.
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let n = array.length; // Obtiene la longitud del array para determinar los límites de las iteraciones.
  let swapped; // Variable para saber si se realizó un intercambio en la iteración.

  do {
    swapped = false; // Inicializa swapped como false en cada iteración.
    // Recorre el array desde el primero hasta el penúltimo elemento.
    for (let i = 0; i < n - 1; i++) {
      // Si un elemento es mayor que el siguiente,
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; // swap a los elementos.
        swapped = true; // Marcamos que se realizó un swap.
      }
    }
  } while (swapped); // Si se realizó un intercambio, repite el proceso.

  return array; // Devuelve el array ordenado.
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  let n = array.length; // Obtiene la longitud del array para determinar el límite de las iteraciones.
  // Recorre el desde el segundo hasta el último elemento.
  for (let i = 1; i < n; i++) {
    let current = array[i]; // Almacenamos el elemento actual.
    let j = i - 1; // Comenzamos a comparar con el elemento justo antes del actual.

    // Mientras el elemento anterior sea mayor que el actual,
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j]; // desplaza el elemento anterior hacia la derecha.
      j--; // Mueve el puntero hacia el elemento anterior.
    }

    array[j + 1] = current; // Inserta el elemento actual en su posición correcta.
  }

  return array; // Devuelve el array ordenado.
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  let n = array.length; // Obtiene la longitud del array para determinar el límite de las iteraciones.

  // Recorre cada elemento del array, excepto el último.
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Asume que el elemento actual es el mínimo.
    // Recorre los elementos siguientes al actual.
    for (let j = i + 1; j < n; j++) {
      // Si encuentra un elemento menor,
      if (array[j] < array[minIndex]) {
        minIndex = j; // actualiza el índice del mínimo.
      }
    }
    // Si el mínimo no es el elemento actual,
    if (minIndex != i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]; // intercambia los elementos.
    }
  }

  return array; // Devuelve el array ordenado.
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
