// Homework JavaScript Avanzado I
// Scope & Hoisting
// Determiná que será impreso en la consola, sin ejecutar el código.

// Investiga cuál es la diferencia entre declarar una variable con var y directamente asignarle un valor.

// Ejercicio 1
/* x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x); */

/* 10 8 8 9 10 1 */

// Ejercicio 2
/* console.log(bar);
console.log(baz);
foo();
function foo() {
  console.log('Hola!');
}
var bar = 1;
baz = 2; */

/* undefined ReferenceError */

// Ejercicio 3
/* var instructor = 'Tony';
if (true) {
  var instructor = 'Franco';
}
console.log(instructor); */

/* Franco */

// Ejercicio 4
/* var instructor = 'Tony';
console.log(instructor);
(function () {
  if (true) {
    var instructor = 'Franco';
    console.log(instructor);
  }
})();
console.log(instructor); */

/* Tony Franco Tony*/

// Ejercicio 5
/* var instructor = 'Tony';
let pm = 'Franco';
if (true) {
  var instructor = 'The Flash';
  let pm = 'Reverse Flash';
  console.log(instructor);
  console.log(pm);
}
console.log(instructor);
console.log(pm); */

/* The Flash Reverse Flash The Flash Franco*/

// Coerción de Datos
// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

// Ejercicio 6
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// 7 / 0 // Infinity
// {}[0] // undefined
// parseInt("09") // 9
// (5 && 2) // 2
// 2 && 5 // 5
// 5 || 0 // 5
// 0 || 5 // 5
// [3]+[3]-[10] // 23
// 3>2>1 // false
// [] == ![] // true

// Si te quedó alguna duda repasá con este artículo.

// Hoisting
// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

// Ejercicio 7
/* function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test(); */

/* undefined 2 */
/* Al llamar el console .log(a) la variable está declarada por el hoisting, pero aún no se le ha asignado un valor, pero en el caso de la función foo() el valor está disponible gracias a que por el hoisting su valor ya fue ejecutado inicialmente.*/

// Y el de este código? :
// Ejercicio 8
/* var snack = 'Meow Mix';

function getFood(food) {
  if (food) {
    var snack = 'Friskies';
    return snack;
  }
  return snack;
}

getFood(false); */

/* undefined */
/* como en getFood(false) no entramos a la asignación de snack, la variable snack es undefined */

// This
// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

// Ejercicio 9

/* var fullname = 'Juan Perez';
var obj = {
  fullname: 'Natalia Nerea',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test()); */

/* Aurelio De Rosa undefined */

/* el primer log da Aurelio De Rosa, el segundo da undefined, ya que el primer this accede al contexto del objeto, pero el segundo al contexto del entorno de ejecución. */

// Event loop
// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

// Ejercicio 10
/* function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing(); */

/* 1 4 3 2 */
