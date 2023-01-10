//EJEMPLO UTILIZANDO EL LOCALSTORAGE PARA CAMBIAR EL MODO DARK O CLARO

//1) Crear un botón que cambie el modo de la página.
//2) Almacenamos el modo en el localStorage.
//3) Al recargar la página, recuperamos el modo del localStorage.
//4) Cambiar el modo de la página

const botonFondo = document.getElementById("botonFondo");

botonFondo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "light");
    }
})

//Recuperamos el modo del localStorage:

const modo = localStorage.getItem("modo");

if(modo === "dark") {
    document.body.classList.add("dark");
} else {
    document.body,classList.remove("dark")
}

//Recordemos:
//Document es el objeto que representa al documento HTML
//Body es el elemento que representa al body del documento HTML.
//classList es una propiedad que nos devuelve una lista de las clases del elemento.
//toggle es un método que nos permite agregar o eliminar una clase del elemento.