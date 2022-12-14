
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
 }


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



/**STORAGE **/

//Nos permite guardar datos de manera local en el navegador.

//El Navegador nos ofrece dos formas de guardar datos en el Storage:

//LocalStorage: almacena los datos de forma indefinida, hasta que el usuario los borre e forma manual.//

//SessionStorage: almacena los datoshasta que el usuario cierra el navegador.


//1) Trabajamos con el LocalStorage:

//Para guardar datos en el localStorage tengo que usar un m??todo que se llama setItem().

//Esto lo hacemos llamando a un objeto global localStorage.

//localStorage.setItem()

//Este m??todo recibe dos par??metros: el nombre de la clave y el valor a guardar.

//Ejemplo A. Almacenamos un saludo

localStorage.setItem("saludo" , "Hola navegante");

//Ejemplo B. Almacenamos un number.

localStorage.setItem("numero" , 1234);

//ejemplo C. Almacenamos un booleano

localStorage.setItem("booleano" , true);

//Para recuperar los datos almacenados, utilizamos el m??todo getItem()

let saludo = localStorage.getItem("saludo");
console.log(saludo);

//Recuperaramos el n??mero:

let numero = localStorage.getItem("numero");
console.log(numero);


//2) Trabajamos con el SessionStorage:
// El funcionamiento es similar al LocalStorage.

//guardamos datos con el m??todo setItem();

//Almacenamos saludo en el SessionStorage:

sessionStorage.setItem("SaludoNuevo", "Hola aventureros");

//Recupero un dato del sessionStorage.

let saludoDos = sessionStorage.getItem("SaludoNuevo");
console.log(saludoDos);


sessionStorage.setItem("numero", 12345678);
sessionStorage.setItem("booleanoNuevo", false);


//Eliminamos datos del Storage:

//Para eliminar datos del localStorage, utilizamos el m??todo removeItem().

localStorage.removeItem("saludo");

//Tambi??n puedo eliminar toda la informaci??n del localStorage con el m??todo clear().

localStorage.clear();


//Recorrer con un bucle el localStorage.
//Utilizamos el m??todo key() que nos devuelve un array con las claves de storage.

console.log("Recorremos el localStorage:");

for(let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(clave, valor);
}


/** ALMACENAR OBJETOS EN EL STORAGE **/

//Tenemos que tener en cuenta que todo lo que se almacena en el Storage est?? en formato String.

//Por lo tanto, si queremos almacenar un objeto, tenemos que convertirlo en String.

//JSON: Javascript Object Notation. Es un formato de texto ligero para el intercambio de datos.

//JSON ES UN STRING CON UN FORMATO ESPECIAL.

const Ernesto = {
    nombre: "Ernesto",
    apellido: "Nazarre",
    edad: 71,
    casado: false
};

//Utilizamos el m??todo JSON.stringify()

const ernestoJSON = JSON.stringify(Ernesto);

console.log(ernestoJSON, typeof ernestoJSON);

//Lo almaceno en el localStorage

localStorage.setItem("ernesto" , ernestoJSON)

//Ahora si quiero recuperar un JSON del LocalStorage y convertirlo en un objeto tengo que utilizar el m??todo JSON.parse()

const personaJSON = localStorage.getItem("ernesto");

const persona = JSON.parse(personaJSON);

console.log(persona, typeof persona);

//EJEMPLO UTILIZANDO EL LOCALSTORAGE PARA CAMBIAR EL MODO DARK O CLARO

//1) Crear un bot??n que cambie el modo de la p??gina.
//2) Almacenamos el modo en el localStorage.
//3) Al recargar la p??gina, recuperamos el modo del localStorage.
//4) Cambiar el modo de la p??gina

const botonFondo = document.getElementById("botonFondo");

botonFondo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})






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
            let compra = prompt("??Qu?? quieres comprar?");
            console.log("compra");
        } else if (i < 3) {
            let confirmacion = confirm("??Deseas a??adir esta cantidad al carrito?");

        }
    }
})

*/

