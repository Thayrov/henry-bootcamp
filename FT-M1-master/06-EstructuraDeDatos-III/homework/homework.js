'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
  constructor(value) {
    this.value = value; // Asigna el valor pasado al nodo.
    this.left = null; // Inicializa el hijo izquierdo del nodo como null.
    this.right = null; // Inicializa el hijo derecho del nodo como null.
  }

  size() {
    let total = 1; // Inicia un contador de nodos en 1 para contar el nodo actual.
    if (this.left) total += this.left.size(); // Si hay un hijo izquierdo, suma su tamaño (recursivamente).
    if (this.right) total += this.right.size(); // Si hay un hijo derecho, suma su tamaño (recursivamente).
    return total; // Retorna el total de nodos en el sub-árbol.
  }

  insert(newValue) {
    let subTree = new BinarySearchTree(newValue);
    if (newValue < this.value) {
      // Comprueba si el nuevo valor es menor que el valor del nodo.
      this.left
        ? this.left.insert(newValue) // Si hay un hijo izquierdo, inserta el valor en ese sub-árbol (recursivamente).
        : (this.left = subTree); // Si no hay hijo izquierdo, crea un nuevo nodo con el valor.
    } else {
      // Si el nuevo valor es mayor o igual que el valor del nodo.
      this.right
        ? this.right.insert(newValue) // Si hay un hijo derecho, inserta el valor en ese sub-árbol (recursivamente).
        : (this.right = subTree); // Si no hay hijo derecho, crea un nuevo nodo con el valor.
    }
  }

  contains(searchValue) {
    if (this.value === searchValue) {
      return true; // Si el valor del nodo actual es igual al buscado, retorna verdadero.
    }
    if (searchValue < this.value) {
      return this.left ? this.left.contains(searchValue) : false; // Si el valor buscado es menor, busca en el hijo izquierdo (recursivamente).
    } else {
      return this.right ? this.right.contains(searchValue) : false; // Si el valor buscado es mayor, busca en el hijo derecho (recursivamente).
    }
  }

  depthFirstForEach(cb, order = 'in-order') {
    if (order === 'pre-order') {
      cb(this.value); // En pre-order, primero procesa el nodo actual.
      if (this.left) this.left.depthFirstForEach(cb, order); // Luego recorre el sub-árbol izquierdo (recursivamente).
      if (this.right) this.right.depthFirstForEach(cb, order); // Finalmente, recorre el sub-árbol derecho (recursivamente).
    } else if (order === 'post-order') {
      if (this.left) this.left.depthFirstForEach(cb, order); // En post-order, primero recorre el sub-árbol izquierdo (recursivamente).
      if (this.right) this.right.depthFirstForEach(cb, order); // Luego recorre el sub-árbol derecho (recursivamente).
      cb(this.value); // Finalmente, procesa el nodo actual.
    } else {
      if (this.left) this.left.depthFirstForEach(cb, order); // En in-order, primero recorre el sub-árbol izquierdo (recursivamente).
      cb(this.value); // Luego procesa el nodo actual.
      if (this.right) this.right.depthFirstForEach(cb, order); // Finalmente, recorre el sub-árbol derecho (recursivamente).
    }
  }

  breadthFirstForEach(cb) {
    const queue = [this]; // Inicializa una cola con el nodo actual.
    while (queue.length) {
      // Mientras haya elementos en la cola.
      const node = queue.shift(); // Extrae el primer elemento de la cola.
      cb(node.value); // Ejecuta la función callback con el valor del nodo.
      if (node.left) queue.push(node.left); // Si hay un hijo izquierdo, lo añade a la cola.
      if (node.right) queue.push(node.right); // Si hay un hijo derecho, lo añade a la cola.
    }
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
