const ordenarPorAño = require('../checkpoint/06.js');

describe('EJERCICIO 6: ordenarPorAño', function () {
   it('Ordenar todas las películas según el año de menor a mayor', () => {
      const sortSpy = jest.spyOn(Array.prototype, 'sort');
      const catalogo = [
         {
            nombre: 'Avengers: La era de Ultrón',
            añoDeEstreno: 2015,
            genero: 'Fantasia/Aventura/Acción',
            taquillera: true,
         },
         {
            nombre: 'Star Wars: El retorno del Jedi',
            añoDeEstreno: 1983,
            genero: 'Accion/Fantasia/Aventura',
            taquillera: true,
         },
         {
            nombre: 'Toy Story 3',
            añoDeEstreno: 2010,
            genero: 'Infantil/Animación',
            taquillera: true,
         },
      ];
      const peliculas = [
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
      expect(ordenarPorAño(catalogo, peliculas)).toEqual([
         {
            nombre: 'Star Wars: El retorno del Jedi',
            añoDeEstreno: 1983,
            genero: 'Accion/Fantasia/Aventura',
            taquillera: true,
         },
         {
            nombre: 'Amnesia',
            añoDeEstreno: 2000,
            genero: 'Acción',
            taquillera: false,
         },
         {
            nombre: 'Toy Story 3',
            añoDeEstreno: 2010,
            genero: 'Infantil/Animación',
            taquillera: true,
         },
         {
            nombre: 'Avengers: La era de Ultrón',
            añoDeEstreno: 2015,
            genero: 'Fantasia/Aventura/Acción',
            taquillera: true,
         },
         {
            nombre: 'Top Gun: Maverick',
            añoDeEstreno: 2022,
            genero: 'Acción/Drama',
            taquillera: true,
         },
      ]);
      expect(sortSpy).not.toHaveBeenCalled();
   });
});
