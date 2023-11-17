const BinarySearchTree = require('../checkpoint/09');

describe('Ejercicio 09 - 🎥🎬 obtenerPeliculas() 🎥🎬', () => {
   test('Recorrer el árbol y las pelÍculas que coincidan con la solicitada. Devolver en un arerglo toda la data acomodada ', () => {
      const peli = new BinarySearchTree({ nombre: 'Morbius', horario: 23 });

      peli.insert({
         nombre: 'Harry Potter',
         horario: 7,
         cartelera: { dia: 2022, mes: 12 },
      });
      peli.insert({
         nombre: 'Los 300',
         horario: 9,
         cartelera: { dia: 2004, mes: 9 },
      });
      peli.insert({
         nombre: 'Harry Potter',
         horario: 20,
         cartelera: { dia: 2000, mes: 11 },
      });
      peli.insert({
         nombre: 'La historia de Jack',
         horario: 23,
         cartelera: { dia: 2013, mes: 10 },
      });

      expect(
         peli.obtenerPelicula({
            nombre: 'Harry Potter',
            horario: 7,
            cartelera: { dia: 2022, mes: 12 },
         })
      ).toEqual([{ nombre: 'Harry Potter', horario: 7, dia: 2022, mes: 12 }]);

      const peli2 = new BinarySearchTree({
         nombre: 'La invitación',
         horario: 5,
      });

      peli2.insert({
         nombre: 'Harry Potter',
         horario: 7,
         cartelera: { dia: 2022, mes: 12 },
      });
      peli2.insert({
         nombre: '300',
         horario: 9,
         cartelera: { dia: 2004, mes: 9 },
      });
      peli2.insert({
         nombre: 'Harry Potter',
         horario: 20,
         cartelera: { dia: 2000, mes: 11 },
      });
      peli2.insert({
         nombre: 'La historia de Jack',
         horario: 23,
         cartelera: { dia: 2013, mes: 10 },
      });

      expect(
         peli.obtenerPelicula({
            nombre: 'La historia de Jack',
            horario: 23,
            cartelera: { dia: 2013, mes: 10 },
         })
      ).toEqual([
         { nombre: 'La historia de Jack', horario: 23, dia: 2013, mes: 10 },
      ]);
   });
});
