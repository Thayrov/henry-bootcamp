const seleccionarPelicula = require('../checkpoint/04');

describe('seleccionarPelicula', function () {
   it("Si el objeto con las pelÍculas estÁ vacÍo retornar el string: 'por favor indicar las peliculas a buscar' ", function () {
      let peliculas = {};
      expect(seleccionarPelicula(peliculas, 'Gladiador')).toBe(
         'por favor indicar las peliculas a buscar'
      );
   });

   it("Si la pelicula no esta en henry-buster debe devolver un mensaje diciendo: 'no tenemos la pelicula: nombrePelicula' ", function () {
      let peliculas1 = {
         0: 'El padrino',
         1: 'Terminator',
         2: 'Iron Man',
         3: 'Rambo',
         4: 'Creed',
      };
      let peliculas2 = {
         0: 'Caza fantasmas',
         1: 'Avengers',
         2: 'Bolt',
         3: 'Halcon',
         4: 'Creed 2',
      };
      expect(seleccionarPelicula(peliculas1, 'Gladiador')).toBe(
         'no tenemos la pelicula: Gladiador'
      );

      expect(seleccionarPelicula(peliculas2, 'Cars')).toBe(
         'no tenemos la pelicula: Cars'
      );
   });

   it("Si la pelicula esta en henry-buster debe devolver un mensaje diciendo: 'se encontro la pelicula: nombrePelicula' ", function () {
      let peliculas1 = {
         0: 'El padrino',
         1: 'Terminator',
         2: 'Iron Man',
         3: 'Rambo',
         4: 'Creed',
      };
      let peliculas2 = {
         0: 'Caza fantasmas',
         1: 'Avengers',
         2: 'Bolt',
         3: 'Halcon',
         4: 'Creed 2',
      };
      expect(seleccionarPelicula(peliculas1, 'Terminator')).toBe(
         'se encontro la pelicula: Terminator'
      );

      expect(seleccionarPelicula(peliculas2, 'Halcon')).toBe(
         'se encontro la pelicula: Halcon'
      );
   });
});
