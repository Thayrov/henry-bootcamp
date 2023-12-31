'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

const nFactorial = n => (n === 1 ? 1 : n * nFactorial(n - 1));

/* let nFactorialIterative = n => {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}; */

// const nFibonacci = n => (n <= 1 ? n : nFibonacci(n - 1) + nFibonacci(n - 2));

/* const nFibonacciIterative = n => {
  if (n <= 1) return n;

  let previous = 0,
    current = 1;
  for (let i = 2; i <= n; i++) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}; */

const nFibonacci = n => {
  const cache = {};
  const fibonacci = n => {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  };
  return fibonacci(n);
};

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(e) {
    this.arr.push(e);
  }
  dequeue() {
    return this.arr.shift();
  }
  size() {
    return this.arr.length;
  }
}

/* function Queue() {
  this.array = [];
}
Queue.prototype.enqueue = function(e) {
  this.array.push(e);
}
Queue.prototype.dequeue = function() {
  return this.array.shift();
}
Queue.prototype.size = function() {
  return this.array.length;
} */

/* function Queue() {
  this.array = [];
  this.enqueue = function(elemento) {
    return this.array.push(elemento);
  }
  this.dequeue = function() {
    return this.array.shift();
  }
  this.size = function() {
    return this.array.length;
  }
} */

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
