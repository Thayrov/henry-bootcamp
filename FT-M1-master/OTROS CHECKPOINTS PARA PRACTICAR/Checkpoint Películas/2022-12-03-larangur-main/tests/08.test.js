/* eslint-disable no-undef */
const LinkedList = require('../checkpoint/08.js');

describe('LinkedList.generarLista()', function () {
   it('El método debe agregar la cantidad de nodos solicitados por parámetro', () => {
      const lista = new LinkedList();
      const lista2 = new LinkedList();
      const lista3 = new LinkedList();
      lista.generarLista(4);
      lista2.generarLista(2);
      lista3.generarLista(10);
      expect(lista.head.value).toEqual(1);
      expect(lista.head.next.value).toEqual(2);
      expect(lista.head.next.next.value).toEqual(3);
      expect(lista.head.next.next.next.value).toEqual(4);
      expect(lista2.head.value).toEqual(1);
      expect(lista2.head.next.value).toEqual(2);
      expect(lista3.head.value).toEqual(1);
      expect(lista3.head.next.value).toEqual(2);
      expect(lista3.head.next.next.value).toEqual(3);
      expect(lista3.head.next.next.next.value).toEqual(4);
      expect(lista3.head.next.next.next.next.value).toEqual(5);
      expect(lista3.head.next.next.next.next.next.value).toEqual(6);
      expect(lista3.head.next.next.next.next.next.next.value).toEqual(7);
      expect(lista3.head.next.next.next.next.next.next.next.value).toEqual(8);
      expect(lista3.head.next.next.next.next.next.next.next.next.value).toEqual(
         9
      );
      expect(
         lista3.head.next.next.next.next.next.next.next.next.next.value
      ).toEqual(10);
   });
});
