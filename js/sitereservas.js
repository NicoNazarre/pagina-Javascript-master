
/* CAPTURAS DE ENTRADAS INGRESADAS POR EL USUARIO */
/* NOTIFICACION DE RESULTADOS EN FORMA DE SALIDA */
function capturar(){
    //console.log("capturando");
    function Persona(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    // console.log(nombreCapturar);
    var apellidoCapturar = document.getElementById("apellido").value;
    // console.log(apellidoCapturar);
    var edadCapturar = document.getElementById("edad").value;
    // console.log(edadCapturar);
    nuevoSujeto = new Persona(nombreCapturar,apellidoCapturar,edadCapturar);
    console.log(nuevoSujeto);
    agregar();

 }

 var baseDatos= [];
 function agregar(){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.apellido+'</td><td>'+nuevoSujeto.edad+'</td></tbody>';
 };


 class Excursion {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

/** FUNCIONES DE ORDEN SUPERIOR */
//* Filter:
const LopezMendez = new Excursion("Lopez Mendez", 100);
const LogoaAzul = new Excursion("Logoa Azul", 60);
const Abrau = new Excursion("Abrau", 50);
const Dentista = new Excursion("Dentista", 120);

const arrayExcursion = [LopezMendez, LogoaAzul, Abrau, Dentista];

console.log("Excursiones disponibles: ");
console.log(arrayExcursion);
const arrayExcursionMenos100 = arrayExcursion.filter(Excursion => Excursion.precio < 100);

console.log("filter: ");
console.log(arrayExcursionMenos100);



/** 

// BUTTON ADD TO CART
const addCart = document.getElementById("add-cart");
addCart.addEventListener("click", ()=>{
    cartValue.innerHTML = numero;
    for (let i = 0; i < 3; i++) {
        if (i < 1) {
            let nombre = prompt("Por favor, ingresa tu nombre");
            console.log(nombre);
        } else if (i < 2) {
            let compra = prompt("¿Qué quieres comprar?");
            console.log("compra");
        } else if (i < 3) {
            let confirmacion = confirm("¿Deseas añadir esta cantidad al carrito?");

        }
    }
});
*/


