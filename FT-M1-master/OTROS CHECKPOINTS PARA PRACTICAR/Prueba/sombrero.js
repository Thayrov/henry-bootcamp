//          Sombrero Seleccionador

/* const Grifindor = ["Grifindor"];
const Slytherin = ["s"];
const Hufflepuff = ["H"];
const Ravenclaw = ["R"];

let mago = prompt("Como te llamas?");
let casaSelecionada = "";

function sobreroSeleccionador(){
    let casa = "";
    let indiceSeleccion = Math.floor(Math.random() * 4) + 1;
    if (indiceSeleccion == 1){
        casa = "Grifindor";
    } else if (indiceSeleccion == 2){
        casa = "Slytherin";
    } else if (indiceSeleccion == 3){
        casa = "Hufflepuff";
    } else { casa = "Ravenclaw"}

    pusheoMago(mago, casa);
};

function pusheoMago(a, b){
    let hechizero=a;
    let equipo = b;
    if (equipo === "Grifindor"){
        Grifindor.push(hechizero);
    } else if (equipo === "Slytherin"){
        Slytherin.push(hechizero);
    } else if(equipo === "Hufflepuff"){
        Hufflepuff.push(hechizero);
    }  else { Ravenclaw.push(hechizero)}

    return alert("El mago " + mago + " fue admitido en " + equipo);
}; */

/* sobreroSeleccionador();
sobreroSeleccionador();
sobreroSeleccionador();
sobreroSeleccionador();
sobreroSeleccionador();
sobreroSeleccionador();
console.log(Grifindor);
console.log(Slytherin);
console.log(Hufflepuff);
console.log(Ravenclaw); */


/* function fibonaccix10 (n) {
    let numero = 0
    let fib1 = n-2
    let fib = n-1
    for (let i = 0; i = 10; i++){
        numero = numero + fib1 + fib
        alert (numero)
        return numero
    }
    
}
let numero = fibonaccix10(5);
console.log(numero); */


let gasto = 0;
let gastoTotal = 0;
let cuantos = parseInt(prompt("Cuantos son"));

function Stack() {
    this.items = [];
  
}
    this.push = function(item) {
      this.items.push(item);
}

function contadorPlata (a,b,c) {
    a = new Stack((parseInt(prompt("Cuanto se gasto? \n Si ya sumaste todo toca pone ¨Listo¨"))));
    for (let i = 0; i === i + 1; i++) {
        if (!isNaN(a.value)){
            console.log("antes de la suma gasto" +b)
            console.log("antes de la suma gastototal" + a.value);
            b = b + a.value
            gastoTotal = b;
            console.log("des de la suma gasto" + b)
            console.log("des de la suma gastototal" + a.value);
            console.log("des suma y retornar" + (a.value + b))
            return contadorPlata(a,b,c)
        } 
    }
        console.log(a + "  " +typeof a)
        console.log(b + " " + typeof b)
        console.log(c + " " + typeof c)
    return alert("El total es: " + b + "Cada uno tiene que poner: " + (b/c));

}
console.log(contadorPlata(gasto,gastoTotal,cuantos));

