const BinarySearchTree = require('../checkpoint/10');

describe('Ejercicio 10 - 🎥🎬 vender() 🎥🎬', () => {
   it("Debe asignar las propiedades 'ticket: true' donde coincidan los valores", () => {
      const arbol = new BinarySearchTree({ nombre: 'Chaplin', horario: 10 });
      arbol.insert({ nombre: 'El Hobbit', horario: 7 });
      arbol.insert({ nombre: '300', horario: 6 });
      arbol.insert({ nombre: 'Masacre en Texas', horario: 22 });
      arbol.insert({ nombre: 'Harry potter', horario: 23 });
         arbol.ingresar([ { nombre: 'Harry potter', horario: 23 },
         { nombre: '300', horario: 6 },
         { nombre: 'El Hobbit', horario: 7 },
         { nombre: 'Masacre en Texas', horario: 20 },
         {nombre: 'Chaplin', horario: 9 }]);
        
      expect(arbol).toEqual({
         value: { nombre: 'Chaplin', horario: 10 },
         left: {
            value: { nombre: 'El Hobbit', horario: 7, ticket: true },
            left: {
               value: { nombre: '300', horario: 6, ticket: true },
               left: null,
               right: null,
            },
            right: null,
         },
         right: {
            value: { nombre: 'Masacre en Texas', horario: 22 },
            left: null,
            right: {
               value: { nombre: 'Harry potter', horario: 23, ticket: true },
               left: null,
               right: null,
            },
         },
      });
      // Segundo test
      const arbol2 = new BinarySearchTree({ nombre: 'Pinocho', horario: 10 });
      arbol2.insert({ nombre: 'El hombre del saco', horario: 12 });
      arbol2.insert({ nombre: 'Cars', horario: 14 });
      arbol2.insert({ nombre: 'Pulp Fiction', horario: 11 });
      arbol2.insert({ nombre: 'Viaje a la luna', horario: 2 });
      arbol2.insert({ nombre: 'Amanecer', horario: 3 });
      arbol2.ingresar([{ nombre: 'Amanecer', horario: 3 }]);
      expect(arbol2).toEqual({
         value: { nombre: 'Pinocho', horario: 10 },
         left: {
            value: { nombre: 'Viaje a la luna', horario: 2 },
            left: null,
            right: {
               value: { nombre: 'Amanecer', horario: 3, ticket: true },
               left: null,
               right: null,
            },
         },
         right: {
            value: { nombre: 'El hombre del saco', horario: 12 },
            left: {
               value: { nombre: 'Pulp Fiction', horario: 11 },
               left: null,
               right: null,
            },
            right: {
               value: { nombre: 'Cars', horario: 14 },
               left: null,
               right: null,
            },
         },
      });
   });
   it('Debe retornar false si el arreglo esta vacío', () => {
      const arbol = new BinarySearchTree({ nombre: 'Camiseta', horario: 20 });
      const arbol2 = new BinarySearchTree({ nombre: 'Traje', horario: 10 });
      expect(arbol.ingresar([])).toEqual(false);
      expect(arbol2.ingresar([])).toEqual(false);
   });
});
