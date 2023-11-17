const { LinkedList } = require('../DS');
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

8️⃣ ***** EJERCICIO 8 ***** - generarLista() 8️⃣

Como las listas nos están siendo útiles para organizar nuestras películas, vamos a pedirte que crees un nuevo método
en el prototipo de "LinkedList" para que podamos generarlas más rápido. El método "generarLista" recibirá por parámetro
el número de la cantidad de nodos (longitud) que tiene que tener la lista.


⛔️ IMPORTANTE ⛔️
1) Cada número en la lista debe incrementarse +1 respecto al anterior comenzando desde el 1.
2) Debes retornar una LinkedList con la misma longitud que recibes por parámetro.


📝 EJEMPLO 📝
INPUT ---> 4
OUTPUT --> Head ➡ (1) ➡ (2) ➡ (3) ➡ (4)
*/
LinkedList.prototype.generarLista = function (longitud) {
   for (var i = 1; i <= longitud; i++){
      this.add(i);
   }
   return this;
};

/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = LinkedList;
