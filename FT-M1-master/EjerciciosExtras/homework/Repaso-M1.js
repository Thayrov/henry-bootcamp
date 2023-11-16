const {Queue, Node, LinkedList, BinarySearchTree} = require('./DS.js');

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algún elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

/* var countArray = function (array) {
  // Tu código aca:
  let Arr = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      Arr = Arr.concat(countArray(array[i]));
    } else {
      Arr.push(array[i]);
    }
  }
  return Arr.reduce((a, b) => a + b);
}; */

function countArray(array, sum = 0) {
  for (let elem of array) Array.isArray(elem) ? (sum += countArray(elem)) : (sum += elem);
  return sum;
}

// const countArray = array => array.flat(Infinity).reduce((a, b) => a + b);

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Debería devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

/* function countProps(obj, acc = Object.keys(obj).length) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      acc += countProps(obj[key]);
    }
  });
  return acc;
} */

function countProps(obj, count = 0) {
  for (let key in obj) {
    count++;
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) count += countProps(obj[key]);
  }
  return count;
}

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a números por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaración: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function (acc = 0, curr = this.head) {
  while (curr) {
    if (isNaN(curr.value)) acc++, (curr.value = 'Kiricocho');
    curr = curr.next;
  }
  return acc;
};

// Implementar la función mergeQueues que a partir de dos queues recibidas por parámetro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

function mergeQueues(queueOne, queueTwo, queueRes = new Queue()) {
  while (queueOne.size() || queueTwo.size()) {
    if (queueOne.size()) queueRes.enqueue(queueOne.dequeue());
    if (queueTwo.size()) queueRes.enqueue(queueTwo.dequeue());
  }
  return queueRes;
}

// Implementar la función closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos números
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

let closureMult = multiplier => multiplierB => multiplier * multiplierB;

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del árbol
BinarySearchTree.prototype.sum = function (sum = 0) {
  if (this.left) sum += this.left.sum();
  if (this.right) sum += this.right.sum();
  return sum + this.value;
};

module.exports = {
  countArray,
  countProps,
  mergeQueues,
  closureMult,
};
