const peliTaquillera = require('../checkpoint/05');

describe('peliTaquillera', function () {
   it('Devolver un arreglo vacío si no se encuentran películas taquilleras', function () {
      let peliculas1 = [
         {
            nombre: 'Los pitufos',
            añoDeEstreno: 2011,
            genero: 'Fantasia/Aventura/Acción',
            taquillera: false,
         },
      ];
      let peliculas2 = [
         {
            nombre: 'Los pitufos',
            añoDeEstreno: 2011,
            genero: 'Fantasia/Aventura/Acción',
            taquillera: false,
         },
         {
            nombre: 'Candy Man',
            añoDeEstreno: 2005,
            genero: 'Terror',
            taquillera: false,
         },
      ];

      expect(peliTaquillera(peliculas1)).toEqual([]);
      expect(peliTaquillera(peliculas2)).toEqual([]);
   });

   it('Devolver las películas que sean taquilleras', function () {
      let peliculas1 = [
         {
            nombre: 'Harry Potter y las reliquias de la muerte 2',
            añoDeEstreno: 2011,
            genero: 'Fantasia/Aventura',
            taquillera: true,
         },
         {
            nombre: 'Los pitufos',
            añoDeEstreno: 2011,
            genero: 'Fantasia/Aventura/Acción',
            taquillera: false,
         },
         {
            nombre: 'Avengers: La era de Ultrón',
            añoDeEstreno: 2015,
            genero: 'Fantasia/Aventura/Acción',
            taquillera: true,
         },
      ];

      let peliculas2 = [
         {
            nombre: 'Top Gun: Maverick',
            añoDeEstreno: 2022,
            genero: 'Acción/Drama',
            taquillera: true,
         },
         {
            nombre: 'Amnesia',
            añoDeEstreno: 2000,
            genero: 'Acción',
            taquillera: false,
         },
      ];

      expect(peliTaquillera(peliculas1)).toEqual([
         {
            nombre: 'Harry Potter y las reliquias de la muerte 2',
            añoDeEstreno: 2011,
            genero: 'Fantasia/Aventura',
            taquillera: true,
         },
         {
            nombre: 'Avengers: La era de Ultrón',
            añoDeEstreno: 2015,
            genero: 'Fantasia/Aventura/Acción',
            taquillera: true,
         },
      ]);
      expect(peliTaquillera(peliculas2)).toEqual([
         {
            nombre: 'Top Gun: Maverick',
            añoDeEstreno: 2022,
            genero: 'Acción/Drama',
            taquillera: true,
         },
      ]);
   });
});
