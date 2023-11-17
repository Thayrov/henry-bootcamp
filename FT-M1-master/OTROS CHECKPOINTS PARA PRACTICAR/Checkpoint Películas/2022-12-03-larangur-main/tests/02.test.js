const { Stack } = require('../DS');
const acomodarPeliculas = require('../checkpoint/02');
describe('Ejercicio 02 - acomodarPeliculas', () => {
   const peliculas = [
      {
         nombre: 'Doctor Strange',
         estreno: 2016,
         duracion: 2,
      },
      {
         nombre: 'Jurassic World',
         estreno: 2015,
         duracion: 1,
      },
      {
         nombre: 'Spider-Man: Sin camino a casa',
         estreno: 2022,
         duracion: 3,
      },
      {
         nombre: 'Batman',
         estreno: 2022,
         duracion: 4,
      },
      {
         nombre: 'Batman',
         estreno: 2022,
         duracion: 1.45,
      },
      {
         nombre: 'Top Gun: Maverick',
         estreno: 2022,
         duracion: 5,
      },
   ];
   const peliculas2 = [
      {
         nombre: 'Doctor Strange',
         estreno: 2016,
         duracion: 0,
      },
      {
         nombre: 'Jurassic World',
         estreno: 2015,
         duracion: 1,
      },
      {
         nombre: 'Spider-Man: Sin camino a casa',
         estreno: 2022,
         duracion: 3,
      },
   ];
   test('Debe retornar un objeto el cual contendrá las nuevas películas con las peliculas solicitadas', () => {
      expect(acomodarPeliculas(peliculas, 'Batman')).toEqual({
         array: [
            {
               nombre: 'Doctor Strange',
               estreno: 2016,
               duracion: 2,
            },
            {
               nombre: 'Jurassic World',
               estreno: 2015,
               duracion: 1,
            },
            {
               nombre: 'Spider-Man: Sin camino a casa',
               estreno: 2022,
               duracion: 3,
            },
            {
               nombre: 'Top Gun: Maverick',
               estreno: 2022,
               duracion: 5,
            },
         ],
      });
      expect(acomodarPeliculas(peliculas2, 'Jurassic World')).toEqual({
         array: [
            {
               nombre: 'Spider-Man: Sin camino a casa',
               estreno: 2022,
               duracion: 3,
            },
         ],
      });
      expect(acomodarPeliculas(peliculas, 'Top Gun: Maverick')).toBeInstanceOf(
         Stack
      );
   });
});
