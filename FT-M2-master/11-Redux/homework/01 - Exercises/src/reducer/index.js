const {INCREMENTO, DECREMENTO} = require('../action-types');

const initialState = {
  contador: 0,
};

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator.
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  // Dependiendo del tipo de acción, se realiza una operación diferente
  switch (action.type) {
    case INCREMENTO:
      // En caso de incremento, aumentamos el valor del contador en 1
      return {
        ...state,
        contador: state.contador + 1,
      };
    case DECREMENTO:
      // En caso de decremento, disminuimos el valor del contador en 1
      return {
        ...state,
        contador: state.contador - 1,
      };
    default:
      // En caso de que la acción no sea reconocida, devolvemos el estado actual sin cambios
      return state;
  }
}

module.exports = contador;
