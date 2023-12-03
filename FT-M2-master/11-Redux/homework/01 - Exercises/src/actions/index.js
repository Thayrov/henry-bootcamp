const {INCREMENTO, DECREMENTO} = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá.
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

// Action creator para incrementar el contador
const incremento = () => {
  return {
    type: INCREMENTO,
    // Aquí no hay payload porque la información necesaria para incrementar ya está implícita
  };
};

// Action creator para decrementar el contador
const decremento = () => {
  return {
    type: DECREMENTO,
    // Aquí no hay payload porque la información necesaria para decrementar ya está implícita
  };
};

module.exports = {
  incremento,
  decremento,
};
