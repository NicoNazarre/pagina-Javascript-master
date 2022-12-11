
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

 const menorDeEdad = edadCapturar.find(persona => persona.edad < 18);

console.log("Find: ")
console.log(menorDeEdad)






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


