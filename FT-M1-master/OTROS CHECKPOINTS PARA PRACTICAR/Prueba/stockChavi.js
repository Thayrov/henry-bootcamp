const productosArray = [
    { nombre: 1, stock: 10, encargar: false, vendidos: 2, stockInicial: 12 },
    { nombre: 2, stock: 6, encargar: false, vendidos: 0, stockInicial: 6 },
    { nombre: 3, stock: 7, encargar: false, vendidos: 5, stockInicial: 12 }
  ];

  function guardarEnLocalStorage(array) {
    try {
      // Convertir el array en una cadena JSON
      const arrayJSON = JSON.stringify(array);
      // Almacenar la cadena JSON en localStorage
      localStorage.setItem('productos', arrayJSON);
      console.log('Array almacenado en localStorage.');
    } catch (error) {
      console.error('Error al almacenar en localStorage:', error);
    }
  }

  function buscarObjetoPorNombre(nombre) {
    try {
      // Obtener el array almacenado en localStorage
      const arrayJSON = localStorage.getItem('productos');
      if (arrayJSON) {
        // Convertir la cadena JSON nuevamente a un array de objetos
        const array = JSON.parse(arrayJSON);
        // Buscar el objeto por nombre
        const objetoEncontrado = array.find(objeto => objeto.nombre === nombre);
        if (objetoEncontrado) {
          console.log('Objeto encontrado:', objetoEncontrado);
          return objetoEncontrado;
        } else {
          console.log('Objeto no encontrado.');
          return null;
        }
      } else {
        console.log('Array no encontrado en localStorage.');
        return null;
      }
    } catch (error) {
      console.error('Error al buscar en localStorage:', error);
      return null;
    }
  }
// Función para realizar la acción de vender o agregar
function realizarAccion() {
    // Preguntar al usuario qué acción desea realizar
    const accion = prompt("¿Qué acción desea realizar?\n1. Vender\n2. Agregar");
  
    if (accion === "1") {
      // Acción de vender
      const nombreProducto = prompt("Ingrese el nombre del producto a vender:");
      const cantidadVendida = parseInt(prompt("Ingrese la cantidad vendida:"));
  
      // Buscar el objeto por nombre
      const objetoParaEditar = buscarObjetoPorNombre(nombreProducto);
  
      if (objetoParaEditar) {
        // Verificar que la cantidad vendida sea válida
        if (cantidadVendida <= objetoParaEditar.stock) {
          // Actualizar las propiedades del objeto
          objetoParaEditar.stock -= cantidadVendida;
          objetoParaEditar.vendidos += cantidadVendida;
          const tercioStockInicial = objetoParaEditar.stockInicial / 3;

          // Verificar si el stock actual es menor o igual a un tercio del stock inicial
          if (objetoParaEditar.stock <= tercioStockInicial) {
            // Cambiar el valor de "encargar" a true
            objetoParaEditar.encargar = true;

  
          // Actualizar el objeto en el array y en localStorage
          guardarEnLocalStorage(productosArray);
  
          alert(`Se vendieron ${cantidadVendida} unidades de ${nombreProducto}.`);
        } else {
          alert("Cantidad insuficiente en stock para vender.");
        }
    } else {
        alert(`Producto con nombre ${nombreProducto} no encontrado.`);
    }
  } else if (accion === "2") {
        const nuevoProducto = {
            nombre: prompt("Ingrese el nombre del nuevo producto:"),
            stock: parseInt(prompt("Ingrese la cantidad en stock:")),
            encargar: false,
            vendidos: parseInt(prompt("Ingrese la cantidad vendida:")),
            stockInicial: parseInt(prompt("Ingrese la cantidad inicial en stock:"))
        };
      
          // Buscar el objeto por nombre
        const objetoParaEditar = buscarObjetoPorNombre(nuevoProducto.nombre);
      
        if (objetoParaEditar) {
            // Actualizar las propiedades del objeto existente
            objetoParaEditar.stock -= nuevoProducto.stock;
            objetoParaEditar.vendidos += nuevoProducto.vendidos;
            const tercioStockInicial = objetoParaEditar.stockInicial / 3;

          // Verificar si el stock actual es menor o igual a un tercio del stock inicial
          if (objetoParaEditar.stock <= tercioStockInicial) {
            // Cambiar el valor de "encargar" a true
            objetoParaEditar.encargar = true;
      
            // Actualizar el objeto en el array y en localStorage
            guardarEnLocalStorage(productosArray);
      
            alert(`Producto ${nuevoProducto.nombre} actualizado con los nuevos valores.`);
        }else {
          alert("Opción no válida.");
        }       
    }
  }

  mostrarObjetosAntesDespues();
  return alert ("Gracias GPT")
}


function mostrarObjetosAntesDespues() {
    // Mostrar los objetos originales en el array
    const objetosOriginales = productosArray.slice(0, 3);
    alert(`Objetos originales:\n${JSON.stringify(objetosOriginales, null, 2)}`);
  
    // Modificar los objetos según la función especificada
    for (const producto of productosArray) {
      if (producto.nombre === 1 || producto.nombre === 2 || producto.nombre === 3) {
        if (producto.stock <= producto.stockInicial / 3) {
          producto.encargar = true;
        }
      }
    }
  
    // Mostrar los objetos después de la modificación
    const objetosModificados = productosArray.slice(0, 3);
    alert(`Objetos modificados:\n${JSON.stringify(objetosModificados, null, 2)}`);
}
}
realizarAccion();
