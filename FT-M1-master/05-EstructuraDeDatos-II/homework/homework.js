'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
class Node {
  constructor(value, next = null) {
    this.value = value; // Establece el valor del nodo.
    this.next = next; // Establece el siguiente nodo en la lista enlazada, por defecto es null.
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Inicializa la cabeza de la lista enlazada como null, lo que indica que la lista está vacía al principio.
    this._length = 0; // Inicializa un contador de longitud para rastrear el número de nodos en la lista.
  }

  add(value) {
    const newNode = new Node(value); // Crea un nuevo nodo con el valor proporcionado.
    if (!this.head) {
      this.head = newNode; // Si la lista está vacía, establece el nuevo nodo como la cabeza de la lista.
    } else {
      let current = this.head; // Inicia un recorrido desde la cabeza de la lista.
      while (current.next) {
        current = current.next; // Recorre la lista hasta encontrar el último nodo.
      }
      current.next = newNode; // Enlaza el último nodo con el nuevo nodo.
    }
    this._length++; // Incrementa la longitud de la lista.
  }

  remove() {
    if (!this.head) return null; // Si la lista está vacía, retorna null.

    if (this.head.next === null) {
      const value = this.head.value; // Si hay solo un nodo, guarda su valor.
      this.head = null; // Establece la cabeza de la lista como null.
      this._length = 0; // Establece la longitud de la lista a 0.
      return value; // Retorna el valor del nodo removido.
    }

    let current = this.head; // Inicia un recorrido desde la cabeza.
    let prev = null; // Almacena el nodo anterior durante el recorrido.
    while (current.next) {
      prev = current; // Actualiza el nodo anterior.
      current = current.next; // Avanza al siguiente nodo.
    }
    prev.next = null; // Elimina la referencia al último nodo.
    this._length--; // Decrementa la longitud de la lista.
    return current.value; // Retorna el valor del nodo removido.
  }

  search(searchTerm) {
    let current = this.head; // Inicia un recorrido desde la cabeza de la lista.
    while (current) {
      if (typeof searchTerm === 'function') {
        if (searchTerm(current.value)) return current.value; // Si el término de búsqueda es una función, la aplica al valor del nodo actual.
      } else if (searchTerm === current.value) return current.value; // Si el término de búsqueda es igual al valor del nodo actual, retorna ese valor.
      current = current.next; // Avanza al siguiente nodo.
    }
    return null; // Si no encuentra el término de búsqueda, retorna null.
  }
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuestra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada carácter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable {
  constructor(numBuckets = 35) {
    this.numBuckets = numBuckets; // Establece el número de buckets (espacios) en la tabla hash. Si no se proporciona, por defecto son 35.
    this.buckets = Array.from({length: this.numBuckets}, () => []); // Crea un array de arrays. Cada sub-array representa un bucket en la tabla hash.
  }

  hash(key) {
    let sum = 0; // Inicializa una suma en 0.
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i); // Suma los códigos de carácter ASCII de cada carácter de la clave.
    }
    return sum % this.numBuckets; // Retorna el residuo de la suma dividida por el número de buckets, determinando así la posición del bucket para la clave.
  }

  set(key, value) {
    if (typeof key !== 'string') {
      throw new TypeError('Keys must be strings'); // Lanza un error si la clave no es una cadena.
    }
    const index = this.hash(key); // Calcula el índice del bucket para la clave.
    const bucket = this.buckets[index]; // Obtiene el bucket correspondiente al índice.
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Si la clave ya existe en el bucket, actualiza su valor.
        return;
      }
    }
    bucket.push([key, value]); // Si la clave no existe, agrega un nuevo par clave-valor al bucket.
  }

  get(key) {
    const index = this.hash(key); // Calcula el índice del bucket para la clave.
    const bucket = this.buckets[index]; // Obtiene el bucket correspondiente al índice.
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1]; // Si encuentra la clave, retorna su valor.
      }
    }
    return null; // Si la clave no se encuentra, retorna null.
  }

  hasKey(key) {
    const index = this.hash(key); // Calcula el índice del bucket para la clave.
    const bucket = this.buckets[index]; // Obtiene el bucket correspondiente al índice.
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true; // Si encuentra la clave, retorna verdadero.
      }
    }
    return false; // Si la clave no se encuentra, retorna falso.
  }
}

/* const HashTbl = new HashTable();

console.log(HashTbl.hash('hola!'));
console.log(HashTbl.set('hola!', 33));
console.log(HashTbl.get('hola!'));
console.log(HashTbl.hasKey('hola!')); */

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
