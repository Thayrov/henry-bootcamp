const { LinkedList } = require('../DS');
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

7️⃣ ***** EJERCICIO 7 - LinkedList ***** - encontrarPeliculas() 7️⃣

Recibiste una lista con todas las películas que están disponibles en este momento. El objetivo es poder ordenarlas 
de una forma más intuitiva. Para esto tendrás que crear agregar un nuevo método llamado "encontrarPeliculas" al 
prototipo de LinkedList. Este método debe retornar una nueva lista en la que se incluyan todas aquellas películas 
que tengan el mismo número de estantería que recibirás por parámetro.


⛔️ IMPORTANTE ⛔️
1) Tienes que retornar una nueva LinkedList con los elementos que coincidan con el número recibido por parámetro.
2) Si no se encuentran elementos con el mismo número, debes retornar false.


📝 EJEMPLO 📝
LISTA ---> Head ➡ (2) ➡ (4) ➡ (6) ➡ (7) ➡ (3) ➡ (3) ➡ (4) ➡ (1)
INPUT ---> 3
OUTPUT --> Head ➡ (3) ➡ (3)
*/

LinkedList.prototype.encontrarPeliculas = function (numeroDeEstantería) {
  let miLista = new LinkedList(),
  current = this.head;

  while (current) {
   if (numeroDeEstantería === current.value){
      miLista.add(current.value);
   }
   current = current.next;
  }
  if (miLista.head) return miLista;
  else return false;
};

/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = LinkedList;
