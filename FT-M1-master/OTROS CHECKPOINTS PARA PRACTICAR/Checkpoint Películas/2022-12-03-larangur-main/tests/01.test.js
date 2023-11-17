const { Queue } = require('../DS');
const guardarPeliculas = require('../checkpoint/01');
// Se puede testear que la queue sea invocada utilizando un jest.spyOn sobre DS

describe('Ejercicio 01 - 🎥🎬 guardarPeliculas() 🎥🎬', () => {
   test('Debe retornar un objeto con los elementos de la Queue', () => {
      const newQueue = new Queue();
      newQueue.enqueue('Morbius');
      newQueue.enqueue('La invitación');
      newQueue.enqueue('Halloween: el final');
      newQueue.enqueue('Muerte en el Nilo');
      newQueue.enqueue('Black Adam');
      expect(newQueue).toBeInstanceOf(Queue);
      expect(guardarPeliculas(newQueue)).toEqual({
         estrenar: 'Morbius',
         1: 'La invitación',
         2: 'Halloween: el final',
         3: 'Muerte en el Nilo',
         4: 'Black Adam',
      });
      const newQueue2 = new Queue();
      newQueue2.enqueue('Agentes 355');
      newQueue2.enqueue('Cásate conmigo');
      newQueue2.enqueue('Jurassic World: Dominion');
      newQueue2.enqueue('La chica salvaje');
      newQueue2.enqueue('Scream');
      expect(newQueue2).toBeInstanceOf(Queue);
      expect(guardarPeliculas(newQueue2)).toEqual({
         estrenar: 'Agentes 355',
         1: 'Cásate conmigo',
         2: 'Jurassic World: Dominion',
         3: 'La chica salvaje',
         4: 'Scream',
      });
      const newQueue3 = new Queue();
      newQueue3.enqueue('Los perdonados');
      newQueue3.enqueue('Malnazidos');
      newQueue3.enqueue('El método Williams');
      newQueue3.enqueue('Lightyear');
      newQueue3.enqueue('Spiderhead');
      expect(guardarPeliculas(newQueue3)).toEqual({
         estrenar: 'Los perdonados',
         1: 'Malnazidos',
         2: 'El método Williams',
         3: 'Lightyear',
         4: 'Spiderhead',
      });
   });
});
