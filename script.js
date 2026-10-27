// Buscamos el área de texto y los textos informativos.
var mensaje = document.getElementById("mensaje");
var contador = document.getElementById("contador");
var estado = document.getElementById("estado");

// Definimos el máximo de caracteres permitidos.
var maximo = 200;

// Se ejecuta cada vez que el usuario escribe o borra texto.
mensaje.addEventListener("input", function () {
    var cantidad = mensaje.value.length;

    // Actualizamos el contador en pantalla.
    contador.textContent = cantidad + " / " + maximo + " caracteres";

    // Si se llega al máximo, mostramos el aviso y el borde rojo.
    if (cantidad >= maximo) {
        mensaje.classList.add("limite");
        contador.classList.add("limite");
        estado.classList.add("limite");
        estado.textContent = "Has alcanzado el límite máximo.";
    } else {
        mensaje.classList.remove("limite");
        contador.classList.remove("limite");
        estado.classList.remove("limite");
        estado.textContent = "Puedes seguir escribiendo.";
    }
});
