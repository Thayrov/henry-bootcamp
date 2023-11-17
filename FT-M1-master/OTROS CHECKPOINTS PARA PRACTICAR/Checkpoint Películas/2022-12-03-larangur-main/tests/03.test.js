const pelisEstrenos = require('../checkpoint/03');

/* eslint-disable no-undef */

describe('EJERCICIO 3: pelisEstrenos', function () {
   it("Si no nos proporcionan las películas de estreno, devolver: 'Por favor indicar las peliculas que son de estreno'", function () {
      const peliculas = [
         {
            nombre: 'Top Gun: Maverick',
            Estreno: '2022',
            genero: 'Acción/Drama',
            estreno: false,
         },
         {
            nombre: 'Amnesia',
            añoDeEstreno: '2000',
            genero: 'Acción',
            estreno: false,
         },
         {
            nombre: 'Avengers: La era de Ultrón',
            añoDeEstreno: '2015',
            genero: 'Fantasia/Aventura/Acción',
            estreno: false,
         },
      ];

      const catalogo = pelisEstrenos(peliculas);
      const estrenos = catalogo([]);

      expect(estrenos).toBe(
         'Por favor indicar las peliculas que son de estreno'
      );
   });

   it("Si las películas no se encuentran en nuestro catálogo, devolver: 'No se encontro ninguna de esas peliculas en nuestro catalogo'", function () {
      const peliculas = [
         {
            nombre: 'Top Gun: Maverick',
            Estreno: '2022',
            genero: 'Acción/Drama',
            estreno: false,
         },
         {
            nombre: 'Amnesia',
            añoDeEstreno: '2000',
            genero: 'Acción',
            estreno: false,
         },
         {
            nombre: 'Avengers: La era de Ultrón',
            añoDeEstreno: '2015',
            genero: 'Fantasia/Aventura/Acción',
            estreno: false,
         },
      ];

      const peliculasEstreno = ['Cars', 'The Witcher', 'Shrek'];

      const catalogo = pelisEstrenos(peliculas);
      const estreno = catalogo(peliculasEstreno);

      expect(estreno).toBe(
         'No se encontro ninguna de esas peliculas en nuestro catalogo'
      );
   });

   it('Devolver el catálogo de películas modificado correctamente según las películas en estreno recibidas', function () {
      const peliculas = [
         {
            nombre: 'Top Gun: Maverick',
            Estreno: '2022',
            genero: 'Acción/Drama',
            estreno: false,
         },
         {
            nombre: 'Amnesia',
            añoDeEstreno: '2000',
            genero: 'Acción',
            estreno: false,
         },
         {
            nombre: 'Avengers: La era de Ultrón',
            añoDeEstreno: '2015',
            genero: 'Fantasia/Aventura/Acción',
            estreno: false,
         },
      ];

      const peliculasEstreno = [
         'Avengers: La era de Ultrón',
         'Top Gun: Maverick',
      ];

      const catalogo = pelisEstrenos(peliculas);
      const estreno = catalogo(peliculasEstreno);

      expect(estreno).toEqual([
         {
            nombre: 'Top Gun: Maverick',
            Estreno: '2022',
            genero: 'Acción/Drama',
            estreno: true,
         },
         {
            nombre: 'Amnesia',
            añoDeEstreno: '2000',
            genero: 'Acción',
            estreno: false,
         },
         {
            nombre: 'Avengers: La era de Ultrón',
            añoDeEstreno: '2015',
            genero: 'Fantasia/Aventura/Acción',
            estreno: true,
         },
      ]);
   });
});
