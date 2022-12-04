 
 /* ALGORISMO UTILIZANDO UN CICLO (FOR Y WHILE) */
 /* FOR */
 for (let numero= 1; numero<=6; numero++){
    if(numero == 5){
        break;
    }
    console.log(numero)
}
 
/* WHILE */
 let numero = 0;
while (numero < 10){
    console.log (numero);
    numero = numero + 1;
}

//* IF */

 let nombre = prompt("Ingrese su nombre")
    if (nombre == ""){
        alert("No ingreso su nombre")
    }
    else{
        alert("Bienvenido" + " " + nombre)
    }
console.log ("Bienvenido" + " " + nombre) 

/* SIMULADOR INTERACTIVO */

const valorPorDia = 100;

let montoIngresado = prompt("Ingrese los días que quiere reservar (u$s " + valorPorDia + " por día)");

let totalReserva =  Number(montoIngresado) * valorPorDia;

console.log("El costo de la reserva es de " + parseFloat(totalReserva).toFixed(2) + " dóalres americanos.");

const nombres  = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const nombresB = nombres.slice (0, 999);
nombresB.reverse ();

console.log (nombresB)

