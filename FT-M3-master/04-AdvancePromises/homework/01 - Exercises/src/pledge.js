'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

class $Promise {
  // Constructor de la clase.
  constructor(executor) {
    // Verifica que el argumento executor sea una función.
    if (typeof executor !== 'function') throw new TypeError('executor must be a function');
    // Inicializa el valor interno y el estado.
    this._value = undefined; // Valor de la promesa.
    this._state = 'pending'; // Estado inicial de la promesa.
    this._handlerGroups = []; // Almacena los grupos de manejadores.
    // Ejecuta el executor con las funciones de resolución y rechazo.
    executor(this._internalResolve, this._internalReject);
  }

  // Método para ejecutar los manejadores (callbacks).
  _executeHandlers = () => {
    // Si la promesa aún está pendiente, no hacer nada.
    if (this._state === 'pending') return;
    // Itera sobre cada grupo de manejadores.
    this._handlerGroups.forEach(handlerGroup => {
      const {successCb, errorCb, downstreamPromise} = handlerGroup;
      try {
        let result;
        if (this._state === 'fulfilled' && successCb) {
          // Si la promesa se cumplió y hay un manejador de éxito, ejecútalo.
          result = successCb(this._value);
        } else if (this._state === 'rejected' && errorCb) {
          // Si la promesa fue rechazada y hay un manejador de error, ejecútalo.
          result = errorCb(this._value);
        } else if (this._state === 'fulfilled') {
          // Si no hay manejador de éxito, resuelve la promesa secundaria directamente.
          downstreamPromise._internalResolve(this._value);
          return;
        } else {
          // Si no hay manejador de error, rechaza la promesa secundaria directamente.
          downstreamPromise._internalReject(this._value);
          return;
        }
        // Si el resultado es otra promesa, asimila su resultado.
        if (result instanceof $Promise) {
          result.then(
            value => downstreamPromise._internalResolve(value),
            reason => downstreamPromise._internalReject(reason),
          );
        } else {
          // Si no, resuelve la promesa secundaria con el resultado.
          downstreamPromise._internalResolve(result);
        }
      } catch (e) {
        // Si ocurre un error en alguno de los manejadores, rechaza la promesa secundaria.
        downstreamPromise._internalReject(e);
      }
    });
    // Limpia los manejadores ejecutados.
    this._handlerGroups = [];
  };

  // Función de resolución interna.
  _internalResolve = value => {
    // Solo actúa si la promesa está pendiente.
    if (this._state === 'pending') {
      this._value = value; // Establece el valor.
      this._state = 'fulfilled'; // Cambia el estado a cumplido.
      this._executeHandlers(); // Ejecuta los manejadores.
    }
  };

  // Función de rechazo interna.
  _internalReject = reason => {
    // Solo actúa si la promesa está pendiente.
    if (this._state === 'pending') {
      this._value = reason; // Establece la razón del rechazo.
      this._state = 'rejected'; // Cambia el estado a rechazado.
      this._executeHandlers(); // Ejecuta los manejadores.
    }
  };

  // Método then.
  then = (successCb, errorCb) => {
    // Crea una nueva promesa secundaria.
    const downstreamPromise = new $Promise(() => {});
    // Agrega los manejadores a la lista.
    this._handlerGroups.push({
      successCb: typeof successCb === 'function' ? successCb : null,
      errorCb: typeof errorCb === 'function' ? errorCb : null,
      downstreamPromise,
    });
    // Ejecuta los manejadores si la promesa no está pendiente.
    if (this._state !== 'pending') {
      this._executeHandlers();
    }
    // Devuelve la promesa secundaria.
    return downstreamPromise;
  };

  // Método catch.
  catch = errorCb => {
    // Devuelve this.then pero solo con el manejador de error.
    return this.then(null, errorCb);
  };

  // Método estático resolve.
  static resolve = value => {
    // Si el valor es una promesa, devuélvelo tal cual.
    if (value instanceof $Promise) {
      return value;
    }
    // Si no, crea y devuelve una promesa que se resuelve con el valor.
    return new $Promise(resolve => resolve(value));
  };

  // Método estático all.
  static all = promises => {
    // Comprueba que el argumento sea un arreglo.
    if (!Array.isArray(promises)) {
      throw new TypeError('Argument must be an array');
    }
    // Crea una nueva promesa que manejará el arreglo de promesas.
    return new $Promise((resolve, reject) => {
      let results = []; // Almacena los resultados.
      let completed = 0; // Contador de promesas completadas.
      // Itera sobre cada promesa del arreglo.
      promises.forEach((promise, index) => {
        // Asegúrate de que cada elemento sea tratado como promesa.
        $Promise.resolve(promise).then(
          value => {
            results[index] = value; // Guarda el resultado en su posición correspondiente.
            completed += 1; // Incrementa el contador de completadas.
            // Si todas las promesas están completadas, resuelve la promesa general.
            if (completed === promises.length) {
              resolve(results);
            }
          },
          reason => {
            // Si alguna promesa es rechazada, rechaza la promesa general.
            reject(reason);
          },
        );
      });
      // Si el arreglo está vacío, resuelve inmediatamente la promesa con un arreglo vacío.
      if (promises.length === 0) {
        resolve(results);
      }
    });
  };
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
