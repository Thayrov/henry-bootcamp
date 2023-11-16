'use strict';
// No cambies los nombres de las funciones.

// Implementar el método conocido como quickSort para ordenar de menor a mayor
// el array recibido como parámetro
// Devolver el array ordenado resultante
// Tu código:

/* function quickSort(array) {
  // Función interna para manejar la partición y las llamadas recursivas
  function quickSortRecursive(start, end) {
    // Función interna para particionar el array alrededor de un pivote
    function partition(left, right, pivotIndex) {
      // Caso base: si izquierda y derecha se cruzan, la partición está completa
      if (left >= right) {
        return pivotIndex;
      }

      // Si el elemento actual es menor que el pivote, moverse a la derecha
      if (array[left] < array[pivotIndex]) {
        return partition(left + 1, right, pivotIndex);
      } else {
        // Si el elemento actual es mayor o igual que el pivote, intercambiarlo con el elemento en 'right'
        [array[left], array[right]] = [array[right], array[left]];
        // Continuar la partición con los índices ajustados
        return partition(left, right - 1, pivotIndex - 1);
      }
    }

    // Solo proceder si hay más de un elemento en el subarray
    if (start < end) {
      // Realizar la partición y obtener el índice final del pivote
      let pivotIndex = partition(start, end, end);
      // Ordenar recursivamente el subarray a la izquierda del pivote
      quickSortRecursive(start, pivotIndex - 1);
      // Ordenar recursivamente el subarray a la derecha del pivote
      quickSortRecursive(pivotIndex + 1, end);
    }
  }

  // Iniciar el proceso de ordenamiento en todo el array
  quickSortRecursive(0, array.length - 1);

  // Devolver el array ordenado
  return array;
} */

/* function quickSort(array) {
  function quickSortRecursive(start, end) {
    function partition(left, right, pivotIndex) {
      if (left >= right) {
        return pivotIndex;
      }

      if (array[left] < array[pivotIndex]) {
        return partition(left + 1, right, pivotIndex);
      } else {
        [array[left], array[right]] = [array[right], array[left]];

        return partition(left, right - 1, pivotIndex - 1);
      }
    }
    if (start < end) {
      let pivotIndex = partition(start, end, end);

      quickSortRecursive(start, pivotIndex - 1);

      quickSortRecursive(pivotIndex + 1, end);
    }
  }
  quickSortRecursive(0, array.length - 1);

  return array;
} */
/* function quickSort(array) {
  if (array.length <= 1) return array;
  let [pivot, ...rest] = array;
  let left = rest.filter(elem => elem <= pivot);
  let right = rest.filter(elem => elem > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
} */

function quickSort(array) {
  if (array.length <= 1) return array;
  var pivot = array.shift();
  var izq = [];
  var der = [];
  for (let i = 0; i < array.length; i++) {
    array[i] < pivot ? izq.push(array[i]) : der.push(array[i]);
  }
  return quickSort(izq).concat(pivot).concat(quickSort(der));
}

// Implementar el método conocido como mergeSort para ordenar de menor a mayor
// el array recibido como parámetro
// Devolver el array ordenado resultante
// Tu código:
/* function mergeSort(array) {
  // Caso base: un array con 0 o 1 elemento ya está ordenado
  if (array.length <= 1) {
    return array;
  }

  // Encontrar el punto medio del array y dividirlo en dos subarrays
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Función recursiva para fusionar dos subarrays
  function merge(left, right) {
    // Si uno de los arrays está vacío, retornar el otro array
    if (!left.length) {
      return right;
    }
    if (!right.length) {
      return left;
    }

    // Elegir el menor de los primeros elementos y fusionar el resto
    if (left[0] < right[0]) {
      return [left[0]].concat(merge(left.slice(1), right));
    } else {
      return [right[0]].concat(merge(left, right.slice(1)));
    }
  }

  // Ordenar recursivamente cada mitad y fusionarlas
  return merge(mergeSort(left), mergeSort(right));
} */

function mergeSort(array) {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  function merge(left, right) {
    if (!left.length) return right;
    if (!right.length) return left;

    if (left[0] < right[0]) {
      return [left[0]].concat(merge(left.slice(1), right));
    } else {
      return [right[0]].concat(merge(left, right.slice(1)));
    }
  }
  return merge(mergeSort(left), mergeSort(right));
}

// Alternativas iterativas:

/* function quickSortIterative(arr) {
  // Crear una pila para almacenar los índices de inicio y fin de las sub particiones
  let stack = [];

  // Añadir el rango inicial a la pila
  stack.push(0);
  stack.push(arr.length - 1);

  // Mientras la pila no esté vacía
  while (stack.length > 0) {
    // Tomar el rango de la pila
    const end = stack.pop();
    const start = stack.pop();

    // Establecer el pivote y llamar a la función de partición
    const pivotIndex = partition(arr, start, end);

    // Si hay elementos a la izquierda del pivote, añadirlos a la pila
    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    // Si hay elementos a la derecha del pivote, añadirlos a la pila
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }

  return arr;
} */

function mergeI(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Mientras haya elementos en ambos arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    // Comparar elementos de 'left' y 'right'
    if (left[leftIndex] < right[rightIndex]) {
      // Agregar el menor al array resultado
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenar los elementos restantes de cada array
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function partition(arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quickSortIterative(arr) {
  let stack = [];

  stack.push(0);
  stack.push(arr.length - 1);

  while (stack.length > 0) {
    const end = stack.pop();
    const start = stack.pop();

    const pivotIndex = partition(arr, start, end);

    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
  return arr;
}

function mergeSortIterative(array) {
  if (array.length <= 1) {
    return array;
  }

  let subarrays = array.map(value => [value]);

  while (subarrays.length > 1) {
    let merged = [];

    for (let i = 0; i < subarrays.length; i += 2) {
      if (i + 1 >= subarrays.length) {
        merged.push(subarrays[i]);
      } else {
        merged.push(mergeI(subarrays[i], subarrays[i + 1]));
      }
    }

    subarrays = merged;
  }

  return subarrays[0];
}

// Función de partición utilizada por QuickSort
/* function partition(arr, start, end) {
  // Elegir el último elemento como pivote
  const pivotValue = arr[end];
  let pivotIndex = start;

  // Reorganizar los elementos en relación al pivote
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Intercambiar elementos
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  // Colocar el pivote en su posición correcta
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function mergeSortIterative(array) {
  // Si el array tiene 0 o 1 elementos, ya está ordenado
  if (array.length <= 1) {
    return array;
  }

  // Dividir el array en subarrays de un solo elemento
  let subarrays = array.map(value => [value]);

  // Iterar hasta que solo quede un subarray (el array ordenado)
  while (subarrays.length > 1) {
    // Nuevo array para almacenar subarrays fusionados
    let merged = [];

    // Fusionar subarrays de dos en dos
    for (let i = 0; i < subarrays.length; i += 2) {
      // Si hay un subarray sin pareja, simplemente añadirlo al nuevo array
      if (i + 1 >= subarrays.length) {
        merged.push(subarrays[i]);
      } else {
        // Fusionar dos subarrays y añadir el resultado al nuevo array
        merged.push(merge(subarrays[i], subarrays[i + 1]));
      }
    }

    // Reemplazar los subarrays antiguos con los nuevos fusionados
    subarrays = merged;
  }

  // El último subarray restante es el array ordenado
  return subarrays[0];
} */

const Merge = (array, left, mid, right) => {
  if (mid >= right) return;
  const len1 = mid - left + 1;
  const len2 = right - mid;
  const larr = Array(len1);
  const rarr = Array(len2);
  for (let i = 0; i < len1; i++) {
    larr[i] = array[left + i];
  }
  for (let i = 0; i < len2; i++) {
    rarr[i] = array[mid + 1 + i];
  }
  let i = 0;
  let j = 0;
  let k = left;
  while (i < larr.length && j < rarr.length) {
    if (larr[i] < rarr[j]) {
      array[k++] = larr[i++];
    } else {
      array[k++] = rarr[j++];
    }
  }
  while (i < larr.length) {
    array[k++] = larr[i++];
  }
  while (j < rarr.length) {
    array[k++] = rarr[j++];
  }
};

const InsertionSort = (array, left, right) => {
  for (let i = left + 1; i <= right; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= left && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
};

const Timsort = array => {
  // Default size of a partition
  const RUN = 32;
  const n = array.length;
  // Sorting the partitions using Insertion Sort
  for (let i = 0; i < n; i += RUN) {
    InsertionSort(array, i, Math.min(i + RUN - 1, n - 1));
  }
  for (let size = RUN; size < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);
      Merge(array, left, mid, right);
    }
  }
  return array;
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
