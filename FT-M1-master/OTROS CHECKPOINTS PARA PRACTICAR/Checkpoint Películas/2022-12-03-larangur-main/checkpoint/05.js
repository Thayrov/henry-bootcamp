/*5️⃣ ***** EJERCICIO 5 - RECURSIÓN ***** - peliTaquillera() 5️⃣

Ya que eres el responsable administrativo de Henry Buster tienes que buscar entre todas las películas aquellas que son
taquilleras (que más ganancias redituan). Para este ejercicio recibiras un arreglo de objetos, donde cada objeto es 
una película que tendrá la siguiente estructura:
{
  nombre: "Harry Potter y las reliquias de la muerte 2",
  añoDeEstreno: "2011",
  genero: "Fantasia/Aventura",
  taquillera: true
}


⛔️ IMPORTANTE ⛔️
1) Tienes que recorrer el arreglo de forma recursiva y devolver aquellas películas que tengan la propidad "taquillera"
igual a true.
2) Si el arreglo está vacío retornar un arreglo vacío.


📝 EJEMPLO 📝
INPUT --->
[{
 nombre: "Los pitufos",
 añoDeEstreno: "2011",
 genero: "Fantasia/Aventura/Acción",
 taquillera: false
 },
 {
  nombre: "Avengers: La era de Ultrón",
  añoDeEstreno: "2015",
  genero: "Fantasia/Aventura/Acción",
  taquillera: true
 }]

OUTPUT --->
[{
  nombre: "Avengers: La era de Ultrón",
  añoDeEstreno: "2015",
  genero: "Fantasia/Aventura/Acción",
  taquillera: true
}]


💡 TIP 💡
1) Podes definir un default-parameter para ayudarte.
*/
function peliTaquillera(peliculas, aux = [], i = 0) {
  if (Object.entries(peliculas).length > 0 && Object.entries(peliculas).length > i){
    if (peliculas[i]['taquillera'] === true){
      aux.push(peliculas[i]);
    }
  peliTaquillera(peliculas, aux, i+1);
  return aux;
   }
   else {
    return [];
   }
}

/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = peliTaquillera;
