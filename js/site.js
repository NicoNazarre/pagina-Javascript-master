// CLASE 1: SINTAXIS Y VARIABLES

// tiro mensaje en la consola
/*
console.log("Hello world 1");
console.log("Hello world 2");
console.log("Hello world 3");
*/



/*
let numero = 5.2;
let frase = "kbz";
let llave = true;

console.log(numero + frase);
console.log(numero, frase, llave);
*/



/*
// declaración
let nombre;
// asignación
nombre = "Pablo";
let apellido = "Montedóncio";

console.log(nombre + " " + apellido);
alert(nombre + " " + apellido);

*/


/*
nombre = "Leonardo";
console.log(nombre + " " + apellido);
*/


/*
const anioNacimiento = 1975;
console.log(anioNacimiento);
*/



/*
let numeroA = 1;
let numeroB = 2;
const numeroC = 3;

//Suma  de dos números (1 + 2 = 3)
let resultadoSuma  = numeroA + numeroB;
//Resta de dos números (2 - 1 = 1)
let resultadoResta = numeroB - numeroA;
//Producto de dos números (2 * 3 = 6)
let resultadoProducto = numeroB * numeroC;


console.log(resultadoSuma, resultadoResta, resultadoProducto);
*/


/*
let nombreIngresado = prompt("Ingrese su nombre");
alert("Hola " + nombreIngresado);
console.log("Hola " + nombreIngresado);
*/




/*
const valorDolar = 41.30;

let montoIngresado = prompt("Ingrese el monto a comprar dólares ($U " + valorDolar + " c/u)");

let totalDolares =  Number(montoIngresado) / valorDolar;

alert("Usted a compado " + totalDolares + " dóalres americanos.");
console.log( "Usted a compado " + totalDolares + " dóalres americanos." );

alert("Usted a compado " + parseFloat(totalDolares).toFixed(2) + " dóalres americanos.");
console.log( "Usted a compado " + parseFloat(totalDolares).toFixed(2) + " dóalres americanos." );
*/







// CLASE 2 control-de-flujo
// console.log("control-de-flujo");



/*
let nombre = "Pablo";
// if (nombre == "Pablo") console.log("Hola Pablo");
if (nombre == "Pablo") {
    console.log("Hola Pablo");
    console.log("Cómo estás?");
}
*/


/*
let nombre = "Laura";
let edad = 47;
let vivo = true;


// condicional
if (nombre == "Pablo") {
    console.log("Hola Pablo");
}

// condicional en una sola linea sin llaves
if (nombre == "Pablo") console.log("Hola Pablo");

if (edad == 47) console.log("si es la edad de Pablo");
if (edad == "47") console.log("si la variable existe");

if (edad === "47") console.log("te aseguras q string");
if (edad === 47) console.log("te aseguras q sea numero");

if (nombre) {
    console.log("MENSAJE!!!!");
}
*/



/*
let pais = "Uruguay";
let paisMayusculas = pais.toUpperCase();
console.log(pais);
console.log(paisMayusculas);

//let pais = "Perú";

if (pais === "URUGUAY") {
    console.log("Hola Bo!");
} else if (pais === "ARGENTINA") {
    console.log("Hola Chabón!");

} else {
    console.log("de q país sos?");
}
*/

/*
let numero = 5;
let esMayor5 = (numero >= 5); // su valor sera true

if (esMayor5) {
    console.log("Es boolean true");
}

let numero = 11;
if (numero != 10) {
    console.log("No es igual a 10")
}
*/



/*
let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario === "") {
    alert("Debe ingresar su nombre");
} else if (nombreUsuario === null) {
    alert("Debe ingresar su nombre");
} else {
    alert("Hola " + nombreUsuario);
}
*/



/*
let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if( (nombreIngresado != "") && (apellidoIngresado != "") ){
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
}else{
    alert("Error: Ingresar nombre y apellido");
}
*/



/*
let nombreIngresado = prompt("Ingresar nombre");
if( (nombreIngresado == "ANA") || (nombreIngresado == "ana") || (nombreIngresado == "aNa") || (nombreIngresado == "aNA") || (nombreIngresado == "ANa") || (nombreIngresado == "anA") || (nombreIngresado == "ANa") ){
    alert("Hola Ana");
}else{
    alert("Usted no Ana");
}
*/


/*
let nombreIngresado = prompt("Ingresar nombre");

if( (nombreIngresado !="") &&
        ( (nombreIngresado == "EMA") || (nombreIngresado == "ema")) ) {
    alert("Hola Ema");
}else{
    alert("Error: Ingresar nombre valido");
}
*/












/*
le pido al usuario q ingrese un número del 0 al 9
e imprimo en consola el número escrito
si no es un número del 0 al 9 tiro un mensaje en la consola
*/


/*
let numeroIngresado = prompt("Ingrese un número del 0 al 9");
// ejemplo con if
if (numeroIngresado == 0) {
    console.log("cero");
} else if (numeroIngresado == 1) {
    console.log("uno");
} else if (numeroIngresado == 2) {
    console.log("dos");
} else if (numeroIngresado == 3) {
    console.log("tres");
} else if (numeroIngresado == 4) {
    console.log("cuatro");
} else if (numeroIngresado == 5) {
    console.log("cinco");
} else if (numeroIngresado == 6) {
    console.log("seis");
} else if (numeroIngresado == 7) {
    console.log("siete");
} else if (numeroIngresado == 8) {
    console.log("ocho");
} else if (numeroIngresado == 9) {
    console.log("nueve");
} else {
    console.log("Ingresó otra cosa, debe ingresar un número del 0 al 9, recargue la página.");
}
*/

/*
// ejemplo con switch
switch(Number(numeroIngresado)) {
    case 0:
    console.log("cero");
    break;

    case 1:
    console.log("uno");
    break;

    case 2:
    console.log("dos");
    break;

    case 3:
    console.log("tres");
    break;

    case 4:
    console.log("cuatro");
    break;

    case 5:
    console.log("cinco");
    break;

    case 6:
    console.log("seis");
    break;

    case 7:
    console.log("siete");
    break;

    case 8:
    console.log("ocho");
    break;

    case 9:
    console.log("nueve");
    break;

    default:
    console.log("Ingresó otra cosa, debe ingresar un número del 0 al 9, recargue la página.");
    break;
}





/*
if (2+2 == 4) {
    console.log("esta lina se ejecuta")
}
*/

/*
// typeof nombre
// dice el tipo de datop console
let nombre = "Pablo"; // string
let numero = 3 + 4; // number
let llave = true // Boolean

// declarar una variable la asigna en true
let papafrita;

let numero2 = 0;

// 0 cero es false
if (numero2 == false) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
}
if (papafrita === undefined) {
    console.log("papafrita");
}
*/



/*
let a = 5;
let b = 15;
let c = 30;
if ( (a+b) >= 20 ) {
    console.log("20");
}
*/



/*
let numero = 10;
let esMayor5 = (numero > 5);

if (esMayor5) {
    console.log(esMayor5);
    console.log("esta linea se ejecuta");
}
*/



/*
let cafe = false;
if(!cafe) console.log("a por un café");
*/



/*
let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if ( (nombreIngresado != "") && (apellidoIngresado != "") ) {
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
    alert("Error: Ingresar nombre y apellido");
}
*/



/*
let nombreIngresado = prompt("Usuario");
if ((nombreIngresado == "ANA") || (nombreIngresado == "ana") || (nombreIngresado == "Ana")) {
    alert("Hola Ana");
} else {
    alert("Error");
}
*/



/*
let nombreIngresado = prompt("Usuario");


if ( (nombreIngresado != "") && ( (nombreIngresado == "EMA") || (nombreIngresado =="ema"))) {
    alert("Hola Ema");
} else {
    alert("Error: Ingresar nombre valido");
}
*/



/*
let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")) {
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
    alert("Error: Ingresar nombre y apellido");
}
*/




/*

// CLASE 3 ciclos-iteraciones
console.log("ciclos-iteraciones");
*/
/*
*/


/*
if (condicion) ...;

if (condicion) {
    ...;
    ...;
    ...;
}
*/

/*
for ( desde ; hasta ; actualización ) {
    ...
}
*/


/*
while (condicion) {
    ...
}

do {
    ...
} while (condicion)

switch(numero) {
    case 5:
    ...
    break;

    case 8:
    ...
    break;

    case 20:
    ...
    break;

    default:
    ...
    break;
}
*/



/*
for ( let i=0; i<10; i++) {
    console.log(i + 1);
}

// bucle negativo
for (let i=9; i>=0; i--){
    console.log("Maxi " + i);
}


for (let i=-10; i<0; i++) {
    console.log("Joaquin " + i);
}
*/




for ( let i=0; i<10; i++) {
    console.log("esta es la " + i + " vez que pasa por esta linea")
}



// 0 a 9
/*
for (let i=0; i<10; i++) {
    // console.log("esta es la vuelta " + i + " del ciclo");
    console.log("kbz " + i);
}
*/

/*
// 1 a 10
for (let i=1; i<=10; i++) {
    // console.log("esta es la vuelta " + i + " del ciclo");
    console.log("kbz " + i);
}
*/


/*
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for ( let i=1; i<=10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero + " X " + i + " = " + resultado);
}
*/


/*
for ( let i=1; i<=20; i++ ) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    console.log(" Turno N° " + i + " Nombre: " + ingresarNombre);
}
*/

/*
for ( let i=1; i<=10; i++ ) {
    // Si la variable i es igual 5 interrumpo el for.
    if (i == 5 || i == 7) {
        continue;
    } else if (i == 9) {
        break;
    }
    console.log(i);
}
*/

/*
for ( let i=1; i<=10; i++ ) {
    console.log("CODER");
}
*/

/*
let entrada = prompt("Ingresar un dato");
// Repetimos con While hasta que el usuario ingresa "ESC"
while (entrada != "ESC") {
    console.log("El usuario ingresó " + entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}
*/


/*
let repetir = false;
do {
    console.log("¡Solo una vez!");
} while (repetir)
*/




/*
let numero = 0;
do {
   // Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
   // Si el parseo no resulta un número se interrumpe el bucle.
} while (parseInt(numero));
*/




/*
let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"

while (entrada != "ESC" ) {
    switch (entrada) {
        case "ANA":
        console.log("HOLA ANA");
        break;

        case "JUAN":
        console.log("HOLA JUAN");
        break;

        default:
        console.log("USTED NO ES USUARIO")
        break;
    }
    entrada = prompt("Ingresar un nombre");
}
*/







/*
// 1 a 10 pero el dato corregido por variable
for (let i=0; i<10; i++) {
    let vueltaHumana = i+1;
    // console.log("esta es la vuelta " + i + " del ciclo");
    console.log("kbz " + vueltaHumana);
}
*/



// let ingresarNumero = parseInt(prompt("Ingresar Numero"));

/*
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for ( let i=0; i<100; i++ ) {
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero + " x " + i + " = " + resultado);
}

*/


/*
let uno = parseInt(prompt("ingresa un numero "));
let dos = parseInt(prompt("ingresa un numero "));
alert(uno + dos);
*/

/*
let num = 15;
console.log(num);
let text = num.toString();
console.log(text + 1);
*/


/*
for (let i = 1; i <= 20; i++) {
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    console.log("Turno N° " + i + " Nombre: " + ingresarNombre);
}
*/

/*
for (let i=0; i<10; i++) {
    if(i==8) break;
    console.log("vamos en la vuelta " + (i+1));
}
*/

/*
for (let i=1; i<=10; i++) {
    if(i==5) {
        continue;
    }
    console.log("vamos en la vuelta " + i);
}
*/


/*
for (let i = 1; i <= 10; i++) {
    if(i == 5 || i == 9) {
        continue;
    }
    console.log(i);
}
*/

/*
let repetir = true;
while(repetir) {
    console.log("Al infinito y...¡Más allá!");
}
*/

/*
let entrada = prompt("Ingresar un dato"); //Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" && entrada != "kbz") {
    // alert("El usuario ingresó " + entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}
*/


/*
let repetir2 = false;
while(repetir2 != false) {
    console.log("kbz");
}
do {
    console.log("kbz");
} while (repetir2 != false);
*/


/*
let repetir = false;
do {
    console.log("¡Solo una vez!");
} while(repetir);
*/



/*
let numero = 0;
do {
    //Repetimos con do...while mientras el usuario ingresa un n°
    numero = prompt("Ingresar Número");
    console.log(numero);
    //Si el parseo no resulta un número se interrumpe el bucle.
// } while (parseInt(numero));
} while (numero != 666);
*/

/*
let entrada = prompt("Ingresar un nombre"); //Repetimos hasta que se ingresa "ESC"

while(entrada != "ESC" ) {
    switch (entrada) {
        case "ana":
        alert("HOLA ANA");
        break;

        case "luis":
        alert("HOLA LUIS");
        break;

        default:
        alert("¿QUIÉN SOS?");
        break;
    }

    // if (entrada == "ana") {
    //     alert("HOLA ANA");
    // } else if (entrada == "luis") {
    //     alert("HOLA LUIS");
    // } else {
    //     alert("QUIEN SOS?");
    // }

    entrada = prompt("Ingresar un nombre");
}
*/

/*
do {
    let entrada = prompt("Ingresar un nombre"); //Repetimos hasta que se ingresa "ESC"
    switch (entrada) {
        case "ana":
        alert("HOLA ANA");
        break;

        case "luis":
        alert("HOLA LUIS");
        break;

        default:
        alert("¿QUIÉN SOS?");
        break;
    }
} while (entrada != "ESC");
*/


// este condicional es lo mismo que el switch
/*
if (entrada == "ana") {
    alert("HOLA ANA");
} else if (entrada == "luis") {
    alert("HOLA LUIS");
} else {
    alert("¿QUIÉN SOS?");
}

/*
*/