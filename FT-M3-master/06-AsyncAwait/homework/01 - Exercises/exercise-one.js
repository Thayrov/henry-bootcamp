/*********** Yo explico `exerciseUtils` ********
 *
 * excersiceUtils es una variable que viene de un archivo en este repo
 * El archivo `./utils` esta en este nivel y se llama `utils.js`
 *
 * Este archivo crea un `promisifiedReadFile` - FIJATE EN ÉL!!!
 *
 * Las funciones `blue` y `magenta` para mantener tu código DRY
 *
 ***********************************************/

'use strict';

const {tryEach} = require('async');
let exerciseUtils = require('./utils');

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemA: problemA,
  problemB: problemB,
  problemC: problemC,
  problemD: problemD,
  problemE: problemE,
  problemF: problemF,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  var problem = module.exports['problem' + arg];
  if (problem) problem();
});

async function problemA() {
  // callback version
  /*   exerciseUtils.readFile("poem-one/stanza-01.txt", function (err, stanza) {
    console.log("-- A. callback version --");
    exerciseUtils.blue(stanza);
  }); */

  // asyncawait version
  // Tu código acá:
  try {
    const stanza = await exerciseUtils.promisifiedReadFile('poem-one/stanza-01.txt');
    console.log('-- A. asyncawait version --');
    exerciseUtils.blue(stanza);
  } catch (err) {
    console.error(err);
  }
}

async function problemB() {
  // callback version
  /* exerciseUtils.readFile('poem-one/stanza-02.txt', function (err, stanza2) {
    console.log('-- B. callback version (stanza two) --');
    exerciseUtils.blue(stanza2);
  });
  exerciseUtils.readFile('poem-one/stanza-03.txt', function (err, stanza3) {
    console.log('-- B. callback version (stanza three) --');
    exerciseUtils.blue(stanza3);
  }); */

  // asyncawait version
  // Tu código acá:
  try {
    const stanza2 = await exerciseUtils.promisifiedReadFile('poem-one/stanza-02.txt');
    console.log('-- B. asyncawait version (stanza two) --');
    exerciseUtils.blue(stanza2);
    const stanza3 = await exerciseUtils.promisifiedReadFile('poem-one/stanza-03.txt');
    console.log('-- B. asyncawait version (stanza three) --');
    exerciseUtils.blue(stanza3);
  } catch (err) {
    console.error(err);
  }
}

async function problemC() {
  // callback version
  /* exerciseUtils.readFile('poem-one/stanza-02.txt', function (err, stanza2) {
    console.log('-- C. callback version (stanza two) --');
    exerciseUtils.blue(stanza2);
    exerciseUtils.readFile('poem-one/stanza-03.txt', function (err, stanza3) {
      console.log('-- C. callback version (stanza three) --');
      exerciseUtils.blue(stanza3);
      console.log('-- C. callback version done --');
    });
  }); */

  // asyncawait version
  // Tu código acá:
  try {
    const stanza2 = await exerciseUtils.promisifiedReadFile('poem-one/stanza-02.txt');
    console.log('-- C. asyncawait version (stanza two) --');
    exerciseUtils.blue(stanza2);
    const stanza3 = await exerciseUtils.promisifiedReadFile('poem-one/stanza-03.txt');
    console.log('-- C. asyncawait version (stanza three) --');
    exerciseUtils.blue(stanza3);
    console.log('-- C. asyncawait version done --');
  } catch (err) {
    console.error(err);
  }
}

async function problemD() {
  // callback version
  /* exerciseUtils.readFile('poem-one/wrong-file-name.txt', function (err, stanza4) {
    console.log('-- D. callback version (stanza four) --');
    if (err) exerciseUtils.magenta(new Error(err));
    else exerciseUtils.blue(stanza4);
  }); */

  // asyncawait version
  // Tu código acá:
  try {
    const stanza4 = await exerciseUtils.promisifiedReadFile('poem-one/wrong-file-name.txt');
    console.log('-- D. asyncawait version (stanza four) --');
    exerciseUtils.blue(stanza4);
  } catch (err) {
    exerciseUtils.magenta(new Error(err));
  }
}

async function problemE() {
  // callback version
  /*   exerciseUtils.readFile('poem-one/stanza-03.txt', function (err, stanza3) {
    console.log('-- E. callback version (stanza three) --');
    if (err) return exerciseUtils.magenta(new Error(err));
    exerciseUtils.blue(stanza3);
    exerciseUtils.readFile('poem-one/wrong-file-name.txt', function (err2, stanza4) {
      console.log('-- E. callback version (stanza four) --');
      if (err2) return exerciseUtils.magenta(err2);
      exerciseUtils.blue(stanza4);
    });
  });
 */
  // asyncawait version
  // Tu código acá:
  try {
    const stanza3 = await exerciseUtils.promisifiedReadFile('poem-one/stanza-03.txt');
    console.log('-- E. asyncawait version (stanza three) --');
    exerciseUtils.blue(stanza3);
    const stanza4 = await exerciseUtils.promisifiedReadFile('poem-one/wrong-file-name.txt');
    console.log('-- E. asyncawait version (stanza four) --');
    exerciseUtils.blue(stanza4);
  } catch (err) {
    exerciseUtils.magenta(new Error(err));
  }
}

async function problemF() {
  // callback version
  /* exerciseUtils.readFile('poem-one/stanza-03.txt', function (err, stanza3) {
    console.log('-- F. callback version (stanza three) --');
    if (err) {
      if (err) exerciseUtils.magenta(new Error(err));
      console.log('-- F. callback version done --');
      return;
    }
    exerciseUtils.blue(stanza3);
    exerciseUtils.readFile('poem-one/wrong-file-name.txt', function (err2, stanza4) {
      console.log('-- F. callback version (stanza four) --');
      if (err2) exerciseUtils.magenta(new Error(err2));
      else exerciseUtils.blue(stanza4);
      console.log('-- F. callback version done --');
    });
  }); */

  // asyncawait version
  // Tu código acá:
  try {
    const stanza3 = await exerciseUtils.promisifiedReadFile('poem-one/stanza-03.txt');
    console.log('-- F. callback version (stanza three) --');
    const stanza4 = await exerciseUtils.promisifiedReadFile('poem-one/wrong-file-name.txt');
    console.log('-- F. callback version (stanza four) --');
    exerciseUtils.blue(stanza4);
    exerciseUtils.blue(stanza3);
    console.log('-- F. callback version done --');
  } catch (err) {
    exerciseUtils.magenta(new Error(err));
    console.log('-- F. callback version done --');
  }
}
